function findTheLargestTwoElementsInAnArray (arr: number[]) { 
  if (arr.length < 2) {
    throw new Error('The length of the array must be at least 2.');
  }

  const max1 = Math.max(...arr);
  const filteredNumbers = arr.filter(num => num !== max1);
  const max2 = Math.max(...filteredNumbers);
  
  return { max1, max2 };
};

const list = [12, 13, 1, 10, 34, 1];
const { max1, max2 } = findTheLargestTwoElementsInAnArray(list);

console.log(`The largest two elements are ${max1} and ${max2}`)