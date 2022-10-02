function findMaximumOfNNumbers(...args: Array<number>) {
    let numbers = [...args]
    let max = 0
    for (let x of numbers) {
        if (x > max) max = x
    }

    return max
} 