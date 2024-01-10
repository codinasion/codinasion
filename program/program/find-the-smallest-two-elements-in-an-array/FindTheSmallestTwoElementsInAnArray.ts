function findTheSmallestTwoElements(arr: number[]): number[] {
  if (arr.length < 2) {
    throw new Error("Array should have at least two elemnts.")
  }

  const sortedArr = arr.slice().sort((a,b) => a - b);
  return sortedArr.slice(0, 2);
}

const numbers = [5, 2, 8, 1, 7, 3];
const smallestTwo = findTheSmallestTwoElements(numbers);

console.log("Original Array:", numbers);
console.log("Smallest Two Elements:", smallestTwo);