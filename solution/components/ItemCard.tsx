import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Item } from "../global/types";

import styles from "../styles/itemCard";

interface ItemCardProps {
  item: Item;
  inCart: boolean;
  handleCart: (item: Item) => void;
  disabled?: boolean;
}

const ItemCard = ({ item, inCart, handleCart, disabled }: ItemCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.calories}>{item.calories} calories</Text>
      </View>
      <TouchableOpacity
        style={inCart ? styles.removeFromCartButton : styles.addToCartButton}
        onPress={() => handleCart(item)}
        disabled={disabled}
      >
        <Text>{inCart ? "Remove from cart" : "Add to cart"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemCard;
