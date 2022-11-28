function factorialize(num: number): number {
  if (num < 0) {return -1}
    
  // If the number is 0, its factorial is 1.
  else if (num == 0) {return 1}
    
  // Otherwise, call the recursive procedure again
    else {
        return (num * factorialize(num - 1));
    }
}

factorialize(5);

console.log("Factorial of 5 is", factorialize(5))
