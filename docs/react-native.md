
# How to use BitcoinJS-lib with React Native?

- New project

```sh
react-native init myReactNativeBitcoinWallet
```

- Install React Native related dependencies

```sh
yarn add react-native-randombytes buffer-reverse buffer@5
```

- Install dex-btc

```sh
yarn add https://github.com/dexlab-io/dex-btc
```

- RN Nodefy

```sh
yarn add --dev rn-nodeify
```

- Add the following postinstall to your script in package.json:
  `"postinstall": "node_modules/.bin/rn-nodeify --install buffer,stream,assert,events,crypto,vm --hack"`

- Link native modules such as `randombytes` and `crypto`

```sh
react-native link
```