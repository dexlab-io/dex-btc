# dex-btc

# BitcoinWallet JavaScript API

All getters returns a **Promise**

## Index 

### Setters
* [setProvider()](#walletsetProvider)
* [setNetwork()](#walletsetNetwork)
* [privateKeyToAccount()](#walletprivateKeyToAccount)

### Getters
* [getBalance()](#walletgetBalance)
* [getUtxo()](#walletgetUtxo)
* [estimateFee()](#walletestimateFee)

### Utils
* [isValidAddress()](#walletisValidAddress)
* [sendTransaction()](#walletsendTransaction)
* [createMultisig()](#walletcreateMultisig)


## API

***

#### wallet.setProvider

##### Parameters

1. `String` - The blockexplorer API provider. Only **blockcypher** supported 

##### Returns

none

##### Example

```js
wallet.setProvider("blockcypher")
```

***


#### wallet.setNetwork

##### Parameters

1. `String` - The Bitcoin blockchain to work against. One of **testnet** and **mainnet** 

##### Returns

none

##### Example

```js
wallet.setNetwork("testnet")
```

***

#### wallet.privateKeyToAccount

##### Parameters

1. `String` - The WIF encoded private key. Mandatory for using `sendTransaction`

##### Returns

none

##### Example

```js
wallet.privateKeyToAccount("e331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109")
```

***
#### wallet.getBalance

##### Parameters

1. `String` - The base58 Bitcoin address to watch the balance for.

##### Returns

- `Promise:String|String` - Returns the balance in satoshis or catch the error

##### Example

```js
wallet.getBalance("2N8hwP1WmJrFF5QWABn38y63uYLhnJYJYTF")
  .then( satoshis => console.log('The balance is ' + satoshis))
  .catch( reason => console.log(reason))

//The balance is 1500000
```

***

#### wallet.getUtxo

##### Parameters

1. `String` - The base58 Bitcoin address to get the utxos of.

##### Returns

- `Promise:Array|String` - Returns the array of utxos per address in the standard format `{txid, vout, satoshis, confirmations}`

##### Example

```js
wallet.getUtxo("2N8hwP1WmJrFF5QWABn38y63uYLhnJYJYTF")
  .then( utxos => console.log(utxos))
  .catch( reason => console.log(reason))

//[...]
```

***


#### wallet.estimateFee

##### Parameters

none

##### Returns

- `Promise:String|String` - Returns the amount in satoshi for the fastest fee 

##### Example

```js
wallet.estimateFee()
  .then( fastestFee => console.log(fastestFee))
  .catch( reason => console.log(reason))

//20000
```

***

#### wallet.isValidAddress

##### Parameters

1. `String` - The Bitcoin address to validate

##### Returns

- `bool` - Returns true if it is a valid base58 address

##### Example

```js
const isValid = wallet.isValidAddress("000")
console.log(isValid)
//false
```

***

#### wallet.sendTransaction

##### Parameters

1. `String` - The Bitcoin address to sent sathosis
2. `Number` - The integer value of satoshis to be sent

##### Returns

- `Promise:Object|String` - Return the transaction object receipt 

##### Example

```js
const dest = "2N8hwP1WmJrFF5QWABn38y63uYLhnJYJYTF"
const amount = 15000000

wallet.sendTransaction(dest, amount)
.then(console.log)

// {...} 
```

***

#### wallet.createMultisig

##### Parameters

1. `Array` - Array of public keys in hex format
2. `m` - treshold needed for sign a valid transaction 

##### Returns

- `String` - Return a m-of-n P2SH Multisig Address 

##### Example

```js

const keys = [
      '032b4c06c06c3ec0b7fa29519dfa5aae193ee2cc35ca127f29f14ec605d62fb63d',
      '0216c92abe433106491bdeb4a261226f20f5a4ac86220cc6e37655aac6bf3c1f2a',
      '039e05da8b8ea4f9868ecebb25998c7701542986233f4401799551fbecf316b18f'
]
const m = 2

const address = wallet.createMultisig(keys, 2)
console.log(address)
// testnet: 2N2VHjejHUCbJSRnoVyoesXMDsaiUey5ptp
//mainnet 3Aw5fuoFrk5xEeAFprBnFaMxfEWJp6vqNX
```





