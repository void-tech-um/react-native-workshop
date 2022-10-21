import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
} from "react-native";

import Cart from "./Cart";
import ItemCard from "./ItemCard";
import ItemFactory from "./ItemFactory";

import { Item } from "../global/types";
import Api from "../helper/api";

import styles from "../styles/market";

const Market = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [cart, setCart] = useState<Item[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const api = new Api();

  const fetchItems = async () => {
    try {
      const items = await api.getItems();
      setItems(items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleAddToCart = (item: Item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const handleRemoveFromCart = (item: Item) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== item.id)
    );
  };

  const handleAddItem = async (item: Item) => {
    try {
      const newItem = await api.postItem(item);
      setItems((prevItems) => [...prevItems, newItem]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckout = () => {
    try {
      cart.forEach(async (item) => {
        await api.deleteItem(item.id);
      });
      setItems((prevItems) => prevItems.filter((item) => !cart.includes(item)));
    } catch (error) {
      console.log(error);
    }
    setCart([]);
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    fetchItems().then(() => setRefreshing(false));
  }, [items]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Market</Text>
        <ScrollView
          style={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={styles.itemCards}>
            {items.map((item, index) => (
              <View key={index}>
                <ItemCard
                  item={item}
                  inCart={false}
                  handleCart={handleAddToCart}
                  disabled={cart.some((cartItem) => cartItem.id === item.id)}
                />
              </View>
            ))}
          </View>
          <Text style={styles.title}>Cart</Text>
          <Cart
            items={cart}
            handleRemoveFromCart={handleRemoveFromCart}
            handleCheckout={handleCheckout}
          />
          <Text style={styles.title}>Add Item</Text>
          <ItemFactory handleAddItem={handleAddItem} />
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Market;
