function largeSmall(numbers) {
    let sorted = numbers.slice().sort(function (a, b) {
        return a - b;
    });
    return sorted;
}

let numbers = [1, 2, 3, 4, 5];
let sort = largeSmall(numbers);
console.log(sort[sort.length - 1], sort[0]);
