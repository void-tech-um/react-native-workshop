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
  return {
    /* 
      // TODO: Add condition 
      // If the items array is empty, display "Cart is empty"
    */
  } ? (
    <View style={styles.container}>
      <Text style={styles.emptyText}>{/* TODO: Text */}</Text>
    </View>
  ) : (
    {
      /* 
        // TODO: Add cart TSX here 
        // Should use map to render the ItemCard components for each item in the items array
        // Should have a Checkout button with an onPress event handler that calls the handleCheckout function
        // Button should be disabled if the items array is empty
        // Hint: Use TouchableOpacity for the button
      */
    }
  );
};

export default Cart;
