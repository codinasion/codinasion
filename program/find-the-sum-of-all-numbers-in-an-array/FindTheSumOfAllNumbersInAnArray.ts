function findSumOfAllNumbersInAnArray(...args: Array<number>) {
    let numbers = [...args]
    let sum = 0
    for (let x of numbers) {
        sum = sum + x
    }

    return sum
} 