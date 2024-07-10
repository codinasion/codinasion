function findLargestTwoElements(arr) {
    if (arr.length < 2) {
      console.log("Array should have at least two elements.");
      return;
    }
  
    // Sort the array in descending order
    arr.sort(function(a, b) {
      return b - a;
    });
  
    // Extract the first and second elements (largest and second largest)
    let largest = arr[0];
    let secondLargest = arr[1];
  
    return [largest, secondLargest];
  }

    // Example usage
    let numbers = [10, 5, 8, 20, 15];
    let result = findLargestTwoElements(numbers);

    let letters = ['f', 'o', 'p', 'w', 'z'];
    let result = findLargestTwoElements(letters);
    
    console.log("Largest two numbers:", result);