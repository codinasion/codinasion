const input = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const binarySearch = (arr: Array<number>, val: number) : number => {

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === val) {
        return mid;
      }

      if (val < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return -1;
}

console.log("Input Array", input);

console.log("Result :", binarySearch(input, 7));