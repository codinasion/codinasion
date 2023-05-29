// Program to divide two numbers using JavaScript
function divideTwoNumbers(num1, num2) {
  if (num2 === 0) {
    console.error("Divide by Zero Error!");
    return null;
  }
  return num1 / num2;
}

// Testing on Browser
// const n1 = prompt("Num 1: ");
// const n2 = prompt("Num 2: ");
// alert(divideTwoNumbers(n1, n2));

// Console Tests
const n1 = 15;
const n2 = 5;
console.log("Normal Case");
console.log(`Input: n1 = ${n1} and n2 = ${n2}`);
console.log(`Output: ${divideTwoNumbers(n1, n2)}`);
console.log("Edge Case");
console.log(`Input: n1 = ${n1} and n2 = 0`);
console.log(`Output: ${divideTwoNumbers(n1, 0)}`);
