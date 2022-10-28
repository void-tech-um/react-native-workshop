---
layout: spec
---

# React Native Workshop

{: .primer-spec-toc-ignore }

Welcome to the React Native Guide for the VOID Tech Org at the University of Michigan. This tutorial introduces the basics of React Native and how to use it to build a simple mobile application.

### Disclaimer

This tutorial is not intended to be a comprehensive guide to React Native. It is intended to be a quick introduction to this framework and how to use it to build a simple mobile application. You can use this guide as reference for your projects, but you should also look at the official documentation for more information.

### Prerequisites

This guide assumes you have basic programming fundamentals, such as variables, functions, loops, and classes. You should also have a basic understanding of React. If you are not familiar with React, you can get started with [VOID's TypeScript and React guide](https://voidtechmichigan.org/react-workshop/#typescript-overview). You can also read the [React Documentation](https://reactjs.org/docs/getting-started.html) to learn more about React.

## Getting Started

Make sure you are in a Unix environment (Mac or Linux). If you are on Windows, you can use the Windows Subsystem for Linux (WSL) to run a Linux environment on your Windows machine. You can find instructions on how to set up WSL [here](https://docs.microsoft.com/en-us/windows/wsl/install-win10).

To get started, you will need to download the starter code for the workshop:

Download and unpack the starter files:

```console
$ pwd
/home/santiagomed/umich/void/workshops
$ mkdir react-native-workshop
$ cd react-native-workshop
$ wget https://voidtechmichigan.org/react-native-workshop/starter_files.tar.gz
$ tar -xvzf starter_files.tar.gz
```

Move the starter files to your project directory and remove the original `starter_files/` directory and tarball.

```console
$ pwd
/home/santiagomed/umich/void/workshops/react-native-workshop
$ mv starter_files/* .
$ rm -rf starter_files starter_files.tar.gz
```

Your project directory should now look like this:

```console
$ tree
react-native-workshop/
├── App.tsx
├── app.json
├── assets
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash.png
├── babel.config.js
├── components
│   ├── Cart.tsx
│   ├── ItemCard.tsx
│   ├── ItemFactory.tsx
│   └── Market.tsx
├── global
│   └── types.ts
├── helper
│   └── api.ts
├── package-lock.json
├── package.json
├── styles
│   ├── cart.ts
│   ├── itemCard.ts
│   ├── itemFactory.ts
│   └── market.ts
└── tsconfig.json
```

## Installation

Once you have cloned the repository, you will need to install Node.js and the dependencies for the project.

If you already have Node.js installed, use `wget` to install `nvm`, the Node.js version manager. You can check if you have Node.js installed by running `node --version`.

```console
$ node --version
v16.18.0
$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
```

Then, use `nvm` to install the latest stable version of Node.js.

```console
$ nvm install --lts
```

If you do not have Node.js installed, you can install it from the [Node.js website](https://nodejs.org/en/). Make sure you install the latest stable version (LTS). As of October 20, 2022, the LTS is v16.18.0. Make sure your installation also includes `npm`, the Node.js package manager.

If you want to install `nvm` to manage your Node.js versions, you can do so through the command below. This is not necessary for the workshop, but it is recommended.

```console
$ node --version
v16.18.0
$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
```

Once you have Node.js installed, you can install the dependencies for the project.

```console
$ pwd
/home/santiagomed/umich/void/workshops/react-native-workshop
$ npm ci
```

### Expo

We are using Expo to build our React Native applications. Expo is a set of tools, libraries, and services that let you build native iOS and Android apps using JavaScript and React. Expo is a great way to get started with React Native and is a great tool for building production-ready applications.

Expo CLI is a command line interface for developing Expo apps. It is installed globally on your computer and is used to create, build, and publish your Expo apps.

#### Using Expo CLI

You can use Expo CLI without installation by leveraging `npx` — a Node.js package runner.

See available commands:

```console
$ npx expo -h

  Usage
    $ npx expo <command>

  Commands
    start, export, export:web
    run:ios, run:android, prebuild
    install, customize, config
    login, logout, whoami, register

  Options
    --version, -v   Version number
    --help, -h      Usage info

  For more info run a command with the --help flag
    $ npx expo start --help

```

Create an expo account (will redirect you to the browser):

```console
$ npx expo register
```

Login to your expo account after creating it:

```console
$ npx expo login
```

#### Using the Expo Go app

Install Expo Go on your mobile device and log in with your account. Expo Go is a free, open-source client for running Expo apps on Android and iOS. It is available on the App Store and Google Play.

## Running the app

Start the development server with `npm start` or `npx expo start` within the project directory. This will display a QR code in your terminal.

To open the app:

- On your Android device, press "Scan QR Code" on the "Home" tab of the Expo Go app and scan the QR code you see in the terminal.

- On your iPhone or iPad, open the default Apple "Camera" app and scan the QR code you see in the terminal.

Once you run the app, you should see "Hello VOID!" on your device.

Learn more about Expo at [docs.expo.dev](https://docs.expo.dev/).

## React Native Overview

**Before continuing with the rest of the guide**, please go over VOID's TypeScript and React guide [here](https://voidtechmichigan.org/react-workshop/#typescript-overview). This will help you understand the basics of these technologies and how to use them, which is necessary to understand React Native.

React Native is a JavaScript framework for writing real, natively rendering mobile applications for iOS and Android. It is developed by Facebook and a community of individual developers and companies. React Native lets you build mobile apps using only JavaScript (or TypeScript). It uses the same design as React, letting you compose a rich mobile UI from declarative components. To learn more about React Native, check out the [React Native website](https://reactnative.dev/).

### Components
Components are the building blocks of React Native apps. They are the functions that return a piece of the UI. We use JSX to describe this UI. JSX is a syntax extension of JavaScript; it is similar to HTML, but it is not HTML. We go over JSX in more detail in the [React guide](https://voidtechmichigan.org/react-workshop/#jsx).

From the [React Native website](https://reactnative.dev/docs/intro-react-native-components):
>In Android development, you write views in Kotlin or Java; in iOS development, you use Swift or Objective-C. With React Native, you can invoke these views with JavaScript using React components. At runtime, React Native creates the corresponding Android and iOS views for those components. Because React Native components are backed by the same views as Android and iOS, React Native apps look, feel, and perform like any other apps. We call these platform-backed components Native Components.\
\
React Native comes with a set of essential, ready-to-use Native Components you can use to start building your app today. These are React Native's Core Components.

Some of the React Native Core Components you are going to be using are:
Component | Android | iOS | HTML | Description
--- | --- | --- | --- | ---
`<View>` | `<ViewGroup` | `<UIView>` | `<div>` | A container that supports layout with flexbox, style, some touch handling, and accessibility controls, and is designed to be nested inside other views and to have 0 to many children of any type.
`<Text>` | `<TextView>` | `<UITextView>` | `<p>` | Displays, styles, and nests strings of text and even handles touch events.
`<Image>` | `<ImageView>` | `<UIImageView>` | `<img>` | Displays different types of images, including network images, static resources, temporary local images, and images from local disks, such as the camera roll.
`<ScrollView>` | `<ScrollView>` | `<UIScrollView>` | `<div>` | A generic scrolling container that can contain multiple components and views.
`<TextInput>` | `<EditText>` | `<UITextField>` | `<input>` | Allows the user to enter text.
`<Touchable*>` | `<View>` | `<UIView>` | `<div>`/`<button>` | A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, which allows the underlay color to show through, darkening or tinting the view. This is commonly used to indicate that the view is an actionable component. The `Touchable*` components can be used to make any view respond properly to touches: `<TouchableHighlight>`, `<TouchableOpacity>`, `<TouchableWithoutFeedback>`, `<TouchableNativeFeedback>`, `<TouchableBounce>`, `<Pressable>`.

We can also build our own components to describe what you want to see on the screen. A component takes in parameters, called `props` (short for "properties"), and returns a hierarchy of views to display via the `render` method.

Let's take a look at App.tsx
```tsx
import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Market from "./components/Market";

export default function App() {
  return (
    <View style={styles.container}>
      <Market />
      <StatusBar style="auto" /> {/* Expo status bar for debugging */}
    </View>
  );
}
```
The `App` component is our main component for the App. We can think of it as our entry point. Inside, we are returning a `View` component, styling it and then calling our `Market` component. The `Market` component is a custom component that we created to display the market data and logic.

### Custom Components

Similar to React, we can return JSX from our components. Let's take a look at the JSX in the `Market` component.
```tsx
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
              <View key={index}> {/* This is a key for React to keep track of the elements */}
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
```
There's a lot going on here so let's go over each component in our code.

#### `KeyboardAvoidingView`
This component is used to make sure that the keyboard does not cover up the input fields when the user is typing. It is a wrapper component that can be used to make any view respond properly to the keyboard.
#### `SafeAreaView`
This component is used to make sure that the content is not blocked by the device's status bar or notches. For example, on an iPhone X or newer, the content will be displayed below the notch.
#### `ScrollView`
This component is used to make sure that the content is scrollable. It is a generic scrolling container that can contain multiple components and views.
#### `RefreshControl`
This component is used to make sure that the content is refreshable. It is a wrapper component that can be used to make any view respond properly to the refresh gesture. We'll go over refreshing in more detail later.
#### `ItemCard`
This is a custom component that we created to display the item data and logic. We won't go over this component in detail, but you can take a look at how it works in VOID's [React guide](https://voidtechmichigan.org/react-workshop/#components-and-props). You can also take a look at the React Native implementation for this component in the [GitHub repo](https://github.com/void-tech-um/react-native-workshop/tree/main/solution/components/ItemCard.tsx). The code is also [below](#styling).
#### `Cart`
This is a custom component that we created to display the cart data and logic. We won't go over this component in detail, but you can take a look at how it works in VOID's [React guide](https://voidtechmichigan.org/react-workshop/#conditional-rendering). You can also take a look at the React Native implementation for this component in the [GitHub repo](https://github.com/void-tech-um/react-native-workshop/tree/main/solution/components/Cart.tsx).
#### `ItemFactory`
This is a custom component that we created to display the form to create items and its logic. We won't go over this component in detail, but you can take a look at how it works in VOID's [React guide](https://voidtechmichigan.org/react-workshop/#lifting-the-state-up). You can also take a look at the React Native implementation for this component in the [GitHub repo](https://github.com/void-tech-um/react-native-workshop/tree/main/solution/components/ItemFactory.tsx).

**Note:** The links above to VOID's React guide are written in regular React, but the concepts are the same.

### Styling
React Native only takes care of our front-end application logic and rendering. It does not handle styling. We can use the `StyleSheet` API to create stylesheets and apply them to our components. Let's take a look at a sample stylesheet from `ItemCard.ts`:
```tsx
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textContainer: {
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  price: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  calories: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  addToCartButton: {
    width: "100%",
    height: "50%",
    backgroundColor: "#28bbd7",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  removeFromCartButton: {
    width: "100%",
    height: "50%",
    backgroundColor: "#f69c85",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});

export default styles;
```

Again this is a lot of code. Take a minute to look at all the implemented styles and try to figure out what each is doing.
Basically, what we're doing here is creating a JavaScript object that contains all the styles that we want to apply to our components. We specify the style by setting certain properties we want our component to have, such as `width` or its location on the screen, using `justifyContent` and `alignItems`. Most names are self explanatory, but if you're still confused, you can take a look at the [React Native documentation](https://reactnative.dev/docs/style) for more information. I certainly do not know all the properties that can be used, so I usually just look them up when I need them.

We can then import this stylesheet into our component and apply it to our component by using the `style` prop. For example, in `ItemCard.tsx`:
```tsx
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
```

### Refreshing
We can use the `RefreshControl` component to make our content refreshable. We can use the `onRefresh` prop to specify a function that will be called when the user refreshes the content. We can also use the `refreshing` prop to specify whether the content is currently refreshing. Let's take a look at how we use this in our `Market.tsx`:
```tsx
import React, { useState, useEffect, useCallback } from "react";
import { RefreshControl } from "react-native";

// We import a lot of stuff here, but we are omitting them for brevity

// We are also omitting a lot of code here for brevity, see the full code in the GitHub repo
const Market = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [cart, setCart] = useState<Item[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchItems = async () => {
    // fetch items
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
          {/* We render our items here, but we are omitting for brevity */}
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Market;
```
There are a couple things to note in the code above. We set a state variable `refreshing` (boolean) to know if we are refreshing; we use the [`useCallback`](https://beta.reactjs.org/apis/react/useCallback) hook to create a function that will be called when the user refreshes the content. This function sets `refreshing` to `true`, calls `fetchItems`, and then sets `refreshing` back to false once the items have been fetched. We can then pass the state variable and the function to the `refreshing` prop and the `onRefresh` prop of the `RefreshControl` component, respectively. To be honest, I have no idea how `RefreshControl` works and I don't care, I just know what it does and how to use it ([Procedural Abstraction](https://medium.com/@rshkntshrm/power-of-procedural-abstraction-249fd7529473)!).

Finally, we pass our `RefreshControl` component to the `refreshControl` prop of the `ScrollView` component. This will make our content refreshable by pulling down on the content.

## Learn More
You can learn more about React Native [here](https://reactnative.dev/docs/getting-started).

To learn more about TypeScript check out the [TypeScript documentation](https://www.typescriptlang.org/docs/).

To learn more about React, check out the [React documentation](https://reactjs.org/).

## Acknowledgements
This tutorial was built by [Santiago Medina](https://github.com/santiagomed) for VOID Tech. It was heavily based off of the React Native documentation. Find the links to the documentation in the "Learn More" section above.

