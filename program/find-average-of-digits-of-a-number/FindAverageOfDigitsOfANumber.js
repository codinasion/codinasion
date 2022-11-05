function FindAverageOfDigits(num) {
    let sum = 0;
    let digit;
    let no_of_digits = 0;
    while (num > 0) {
      digit = num % 10;
      sum = sum + digit;
      num = Math.floor(num / 10);
      no_of_digits++;
    }
    return sum / no_of_digits;
  }
  
  
  
  console.log(FindAverageOfDigits(123));
  console.log(FindAverageOfDigits(28356));
  