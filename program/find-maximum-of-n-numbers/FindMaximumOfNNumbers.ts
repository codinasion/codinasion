function findMaximumOfNNumbers(...args: Array<number>) {
    const numbers = [...args]
    let max = 0
    for (const x of numbers) {
        if (x > max) max = x
    }

    return max
} 