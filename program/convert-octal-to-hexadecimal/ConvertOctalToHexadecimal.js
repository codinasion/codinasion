// JavaScript program to convert Octal
// to Hexadecimal

// Function to convert octal to decimal
function octalToDecimal(n) {
  var num = n;
  var dec_value = 0;

  var base = 1;

  var temp = num;
  while (temp > 0) {
    // Extracting last digit
    var last_digit = temp % 10;
    temp = Math.floor(temp / 10);

    // Multiplying last digit with
    // appropriate base value and
    // adding it to dec_value
    dec_value += last_digit * base;

    base = base * 8;
  }
  return dec_value;
}

// Function to convert decimal
// to hexadecimal
function decToHexa(n) {
  // char array to store
  // hexadecimal number
  var hexaDeciNum = new Array(100);

  // counter for hexadecimal
  // number array
  var i = 0;
  while (n != 0) {
    // Temporary variable to
    // store remainder
    var temp = 0;

    // Storing remainder in
    // temp variable.
    temp = n % 16;

    // Check if temp < 10
    if (temp < 10) {
      hexaDeciNum[i] = temp + 48;
      i++;
    } else {
      hexaDeciNum[i] = temp + 87;
      i++;
    }
    n = Math.floor(n / 16);
  }

  var ans = "";

  // Printing hexadecimal number array
  // in reverse order
  for (var j = i - 1; j >= 0; j--) {
    ans += String.fromCharCode(hexaDeciNum[j]);
  }
  return ans;
}

// Driver Code
var hexnum;
var decnum, octnum;

// Taking 5123 as an example of
// Octal Number.
octnum = 5123;

// Convert Octal to Decimal
decnum = octalToDecimal(octnum);

// Convert Decimal to Hexadecimal
hexnum = decToHexa(decnum);

console.log("Equivalent Hexadecimal Value = " + hexnum);
