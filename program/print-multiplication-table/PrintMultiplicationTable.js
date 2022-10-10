function PrintMultiplicationTable() {
  const number = parseInt(prompt("Enter an integer:"));
  const range = parseInt(prompt("Enter a range:"));

  for (let i = 1; i <= range; i++) {
    const prod = number * i;
    console.log(`${number} x ${i} = ${prod}`);
  }
  return;
}
