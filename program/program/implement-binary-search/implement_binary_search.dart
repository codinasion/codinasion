int binarySearch(List<int> arr, int x) {
  int lowerBound = 0;
  int upperBound = arr.length - 1;

  while (lowerBound <= upperBound) {
    int midPoint = (lowerBound + upperBound) ~/ 2;

    if (arr[midPoint] == x) {
      return midPoint;                //Element found return it's index
    } else if (arr[midPoint] < x) {
      lowerBound = midPoint + 1;      //Search in the right half
    } else {
      upperBound = midPoint - 1;      //Search in the left half
    }
  }
  return -1;
}

void main() {
  //Example Usage
  List<int> sortedArray = [1, 2, 3, 4, 5];
  int valueToSearch = 4;

  int resultIndex = binarySearch(sortedArray, valueToSearch);

  if (resultIndex != -1) {
    print('Elemenet $valueToSearch found at index $resultIndex');
  } else {
    print('Element $valueToSearch not found in the array');
  }
}
