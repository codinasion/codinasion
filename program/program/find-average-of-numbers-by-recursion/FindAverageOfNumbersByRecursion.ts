function average_of_numbers(arr: number[]): number {
  if (arr.length === 1) {
    return arr[0];
  }
  const innerArray: number[] = arr.slice(1);
  return (
    (arr[0] + average_of_numbers(innerArray) * innerArray.length) / arr.length
  );
}

const array = [1, 2, 3, 4, 5];
console.log(average_of_numbers(array));
