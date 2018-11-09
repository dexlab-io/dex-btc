# dex-btc

Bitcoin wallet helpers for React Native 

# Install 

Prepare your React Native app following [those steps](docs/react-native.md)

# API 

API documentation can be found [here](docs/api.md)

# Quickstart

Create a `BitcoinWallet` instance 

```js
const Wallet  = require("dex-btc")
const wallet  = new Wallet("testnet")

//OPTIONAL: default blockcypher API
wallet.setProvider("blockcypher")
```


Get the balance

```js
// Get balance of address
wallet.getBalance("2N8hwP1WmJrFF5QWABn38y63uYLhnJYJYTF").then(console.log)
```


Unlock the privatekey 
```js
//set the privatekey for signing
wallet.privateKeyToAccount("<privateKey>")

//Now the default account has been set
console.log(wallet.defaultAccount)
```


Send a transaction to a 

address
```js
//Send the actual transaction to an address with the amount of satoshi comprhensive of actual value + fee
wallet.sendTransaction(addressTo, 20000).then(console.log).catch(console.log)

```


# Development

### Requirements

* Node/npm >= 8 

### Install

Install Dependencies 

```sh
npm install
```

