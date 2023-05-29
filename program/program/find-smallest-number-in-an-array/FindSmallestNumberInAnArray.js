function findSmallestNumberInAnArray(arr) {
    let smallestNumber = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] < smallestNumber) {
            smallestNumber = arr[i];
        }
    }
    console.log(smallestNumber);
}

findSmallestNumberInAnArray([1, 2, 3, 4, 5]);
