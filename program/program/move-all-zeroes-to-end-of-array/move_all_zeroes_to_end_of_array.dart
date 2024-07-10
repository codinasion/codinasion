// Dart program to move all zeroes to end of array

void moveZeroes(List<int> arr) {
  int n = arr.length;

  // Traverse the array and move non-zero elements to the beginning
  int count = 0;
  for (int i = 0; i < n; i++) {
    if (arr[i] != 0) {
      arr[count++] = arr[i];
    }
  }

  // Fill the remaining positions with zeroes
  while (count < n) {
    arr[count++] = 0;
  }
}

void main() {
  // Test cases
  List<int> arr1 = [1, 2, 0, 4, 3, 0, 5, 0];
  moveZeroes(arr1);
  print('Output for arr1: $arr1'); // Output : [1, 2, 4, 3, 5, 0, 0, 0]

  List<int> arr2 = [1, 2, 0, 0, 0, 3, 6];
  moveZeroes(arr2);
  print('Output for arr2: $arr2'); // Output : [1, 2, 3, 6, 0, 0, 0]
}
 