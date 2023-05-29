const number = 5

function fibonacci(num) {
    let fib = [0, 1];
    let data = [];
    for(let i = 2; i <= num; i++) {
      fib[i] = fib[i - 1] + fib[i - 2]; 
      data.push(fib[i]);
    }
    return [0, 1].concat(data)
}

console.log("Number : ", number);
console.log("Output : ", fibonacci(number));