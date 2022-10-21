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
  const [items, setItems] = useState<Item[]>([]); // <-- This is the state: items array
  const [cart, setCart] = useState<Item[]>([]); // <-- This is the state: cart array
  const [refreshing, setRefreshing] = useState(false); // <-- This is the state: refreshing boolean

  const api = new Api(); // <-- This is the api call object instance

  const fetchItems = async () => {
    // TODO: Implement me
    // This function should fetch all items from the API and set the items state. Hint: use the api object
    // Handle errors using try/catch
  };

  useEffect(() => {
    // TODO: Implement me
    // This is a react hook that will be called when the component is mounted
    // The empty array at the end means that this will only be called once at the start when the component is mounted
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleAddToCart = (item: Item) => {
    // TODO: Implement me
    // This function should add the item to the cart by adding it to the cart state variable
  };

  const handleRemoveFromCart = (item: Item) => {
    // TODO: Implement me
    // This function should remove the item from the cart by removing it from the cart state variable
  };

  const handleAddItem = async (item: Item) => {
    // TODO: Implement me
    // This function should start a POST request to the API to add a new item to the database. Hint: use the api object
    // If the request is successful, the items state variable should be updated with the new item
  };

  const handleCheckout = () => {
    // TODO: Implement me
    // This function should start a DELETE request to the API to delete the items in cart (imagine this is checking out). Hint: use the api object
    // If the request is successful, the cart state variable should be emptied
  };

  const onRefresh = useCallback(async () => {
    // This function is called when the user pulls down to refresh the list of items
    setRefreshing(true);
    fetchItems().then(() => setRefreshing(false));
  }, [items]);

  return (
    //
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={styles.container}>
        {/* TODO: Add application title */}
        <ScrollView
          style={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {/*
            // TODO: Implement me
            // This is the TSX for the Market component
            // It should also use map to render the ItemCard components for each item in the items state variable
            // It should contain the ItemFactory component and the Cart component
            */}
          {/* Replace this text component with the actual implementation */}
          <Text
            style={{
              textAlign: "center",
              fontSize: 50,
              marginVertical: "100%",
            }}
          >
            Hello Void!
          </Text>
          {/* End of text component */}
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Market;
