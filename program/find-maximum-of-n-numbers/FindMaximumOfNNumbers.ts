function findMaximumOfNNumbers(numbers: Array<number>) {
    let max = 0
    for(let x of numbers ) {
        if(x > max) max = x
    }

    return max
} 