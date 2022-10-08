function isPrime(num) {
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0)
            return false;
    }
    return num > 1;
}
console.log(isPrime(17));