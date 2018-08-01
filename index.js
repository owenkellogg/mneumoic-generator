var Mnemonic = require('bitcore-mnemonic');
var code = new Mnemonic(Mnemonic.Words.SPANISH);

console.log(`\nMneumonic Seed:\n`);
console.log(`\t${code.toString()}\n`);

var xpriv = code.toHDPrivateKey();

console.log(`XPrivKey:\n`);
console.log(`\t${xpriv}\n`);
