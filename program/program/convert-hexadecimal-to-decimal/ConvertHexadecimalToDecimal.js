function hexadecimalToDecimal(hexString) {
  var hex = hexString.toString();
  var str = '0123456789ABCDEF';
  var dec = 0;
  for (var i = 0; i < hex.length; i++) {
    dec += str.indexOf(hex.charAt(i)) * Math.pow(16, hex.length - i - 1);
  }
  return dec;
}
console.log(hexadecimalToDecimal('A'));
