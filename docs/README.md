---
layout: spec
---

# React Native Workshop

{: .primer-spec-toc-ignore }

Welcome to the React Native Workshop for the VOID Tech Org at the University of Michigan. The workshop is intended to be a 2 hour workshop that introduces the basics of React Native and how to use it to build a simple mobile application. The workshop is intended to be a hands-on workshop, so the members will be following along to build the application themselves.

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

If you already have Node.js installed, use `npm` to install `nvm`, the Node.js version manager. You can check if you have Node.js installed by running `node --version`.

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

## React Native

React Native is a JavaScript framework for writing real, natively rendering mobile applications for iOS and Android. It is developed by Facebook and a community of individual developers and companies. React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components. To learn more about React Native, check out the [React Native website](https://reactnative.dev/).
