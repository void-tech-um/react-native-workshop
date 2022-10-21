import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { Item } from "../global/types";
import styles from "../styles/itemFactory";

interface IItemFactoryProps {
  // TODO: Implement me
  // Specify the types of the props that are passed to this component
}

// change "any" to the correct type
const ItemFactory = ({ handleAddItem }: any) => {
  // Set the state using the useState hook
  // Hint: The state variables should keep track of the value entered in the input fields of the form

  return {
    /* 
        // TODO: Add Item Factory TSX here. Hint: It's a collection of TextInput components and a Button component 
        // The form should have an onSubmit event handler that calls the handleAddItem function
        // The form should have three input fields: name, price, and calories
        // The onChange event handler of each input field should update the corresponding state variable
    */
  };
};

export default ItemFactory;
