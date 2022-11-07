function findMinimumOfNNumbers(...args: Array<number>) {
    const numbers = [...args]
    
    const sortedNumbers = numbers.sort((a, b) => a - b);
 
    return sortedNumbers[0];
} 