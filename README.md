# dex-btc

# Development

### Requirements

* Node/npm >= 8 


### Install

Install Dependencies 

```sh
npm install
```

# Deployment

TBD


# Usage 

API documentation can be found [here](docs/api.md)


# Quickstart

Create a `BitcoinWallet` instance 

```js
const Wallet  = require("dex-btc")
const wallet  = new Bitcoin3("testnet")

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


Send a transaction to a Bitcoin address
```js
//Send the actual transaction to an address with the amount of satoshi comprhensive of actual value + fee
wallet.sendTransaction(addressTo, 20000).then(console.log).catch(console.log)

```


