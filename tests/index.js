const Bitcoin3 = require('../src/index')
const b3 = new Bitcoin3("testnet")
const bitcoin = require("bitcoinjs-lib")
const assert = require("assert")
const { NETWORKS } = require("../src/config/constants")


function generateRandomKeysAndCreateMultisigAddress() {
  const keys = [
    bitcoin.ECPair.makeRandom({ network: NETWORKS[b3.network].object }),
    bitcoin.ECPair.makeRandom({ network: NETWORKS[b3.network].object }),
    bitcoin.ECPair.makeRandom({ network: NETWORKS[b3.network].object }),
    bitcoin.ECPair.makeRandom({ network: NETWORKS[b3.network].object })
  ].map((key) => {
    const { publicKey, privateKey } = key
    return { publicKey, privateKey }
  })

  const multisig = b3.createMultisig(keys.map(key => key.publicKey))
  assert(multisig, "error in generateRandomKeysAndCreateMultisigAddress")
}


function runTests(array) {
  let errors = [], success = 0
  while (array.length){ 
    const result = array.shift().call()
    
    if (result !== undefined) {
      errors.push(result)
    } else {
      success++
    }
  }
  console.log("Success: " + success)
  console.log("Errors: " + errors.length)
}

//Run
runTests([
  () => generateRandomKeysAndCreateMultisigAddress(),
  () => testCreateMultisig()
])

