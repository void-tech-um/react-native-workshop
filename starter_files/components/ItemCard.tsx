import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Item } from "../global/types";

import styles from "../styles/itemCard";

interface ItemCardProps {
  // TODO: Implement me
  // Specify the types of the props that are passed to this component
}

// change "any" to the correct type
const ItemCard = ({ item, inCart, handleCart, disabled }: any) => {
  return {
    /* 
        // TODO: Add Item Card TSX here 
        // Should display the item's name, price, and calories
        // Should conditionally render the Add to Cart or Remove from Cart button based on the inCart prop
        // The button should have an onPress event handler that calls the handleCart function
        // The button should be disabled if the disabled prop is true
        // Hint: Use TouchableOpacity for the button
    */
  };
};

export default ItemCard;
