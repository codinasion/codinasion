function average_of_numbers(arr: any, length: number, i: number): any {
    if (i === length - 1) {
      return arr[i];
    }
    else if (i === 0) return (arr[i] + average_of_numbers(arr, length, i + 1)) / length;
  
    else return arr[i] + average_of_numbers(arr, length, i + 1);
  }
  
  let array = [1, 2, 3, 4, 5];
  let i = 0;
  console.log(average_of_numbers(array, array.length, i));
