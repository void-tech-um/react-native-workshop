import * as React from "react";
import ItemCard from "./ItemCard";
import { Item } from "../global/types";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../styles/cart";

interface ICartProps {
  items: Item[];
  handleRemoveFromCart: (item: Item) => void;
  handleCheckout: () => void;
}

const Cart = ({ items, handleRemoveFromCart, handleCheckout }: ICartProps) => {
  return items.length === 0 ? (
    <View style={styles.container}>
      <Text style={styles.emptyText}>Cart is empty</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.itemCards}>
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            inCart={true}
            handleCart={handleRemoveFromCart}
          />
        ))}
      </View>
      <View style={styles.buttonParent}>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => handleCheckout()}
          disabled={!items.length}
        >
          <Text>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
