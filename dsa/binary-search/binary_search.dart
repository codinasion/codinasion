// List to search from
List<int> input = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// Target Value
int target = 30;

void main() {
  // Search starts from the 0th index initially.
  int start = 0;

  // Search end at the last index initially.
  int end = input.length - 1;

  // Index where the target value is found
  int? index = binarySearch(start, end);

  // Print the result through recursion.
  if (index != null) {
    print("The value $target is found at index $index");
  } else {
    print("The value $target is not a part of the list");
  }
}

int? binarySearch(int start, int end) {
  // Getting the middle index of the range
  int midIndex = ((end - start) / 2).floor() + start;

  // Getting the value of the middle index
  int middle = input[midIndex];

  if (target == middle) {
    // We have found the index that contains the value
    // So we return the index
    return midIndex;
  } else if (start == end) {
    // The target is not a part of list
    // We return null to break recursion
    return null;
  } else if (target > middle) {
    // If the target is higher than the middle value
    // The target is in the right side of the list
    // Which is in the range of mid -> end.
    return binarySearch(midIndex + 1, end);
  } else {
    // If the target is lower than the middle value
    // The target is in the left side of the list
    // Which is in the range of start -> mid.
    return binarySearch(start, midIndex - 1);
  }
}
