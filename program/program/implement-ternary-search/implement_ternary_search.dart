int ternarySearch(List<int> arr, int value) {
  int l = 0;
  int r = arr.length - 1;

  while (l <= r) {
    int partitionSize = (r - l) ~/ 3;
    int mid1 = l + partitionSize;
    int mid2 = r - partitionSize;

    if (arr[mid1] == value) {
      return mid1;
    }

    if (arr[mid2] == value) {
      return mid2;
    }

    if (value < arr[mid1]) {
      r = mid1 - 1;
    } else if (value > arr[mid2]) {
      l = mid2 + 1;
    } else {
      l = mid1 + 1;
      r = mid2 - 1;
    }
  }

  return -1; // Value not found
}

void main() {
  List<int> list = [1, 2, 3, 4, 5];
  int value = 4;
  int result = ternarySearch(list, value);

  if (result != -1) {
    print("Element found at index: $result");
  } else {
    print("Element not found in the array");
  }
}
