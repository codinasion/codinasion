function findSumOfAllNumbersInAnArray(...args: Array<number>) {
    const numbers = [...args]
    let sum = 0
    for (const x of numbers) {
        sum = sum + x
    }

    return sum
} 