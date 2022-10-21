import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { Item } from "../global/types";
import styles from "../styles/itemFactory";

interface IItemFactoryProps {
  handleAddItem: (item: Item) => Promise<void>;
}

const ItemFactory = ({ handleAddItem }: IItemFactoryProps) => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(null);
  const [itemCalories, setItemCalories] = useState(null);

  return (
    <View>
      <Text style={styles.label}>Item Name</Text>
      <TextInput
        value={itemName}
        onChangeText={setItemName}
        style={styles.input}
      />
      <Text style={styles.label}>Item Price</Text>
      <TextInput
        value={itemPrice}
        onChangeText={setItemPrice}
        style={styles.input}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Item Calories</Text>
      <TextInput
        value={itemCalories}
        onChangeText={setItemCalories}
        style={styles.input}
        keyboardType="numeric"
      />
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.addItemButton}
          onPress={() =>
            handleAddItem({
              name: itemName,
              price: itemPrice,
              calories: itemCalories,
            })
          }
        >
          <Text>Add Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemFactory;
