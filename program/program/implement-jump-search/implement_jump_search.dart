import 'dart:math';

int jumpSearch(List<int> array, int x) {
  int n = array.length;
  int blockSize = sqrt(n).toInt();
  int prev = 0;

  // Jump to the right block
  while (array[min(blockSize, n) - 1] < x) {
    prev = blockSize;
    blockSize += sqrt(n).toInt();
    if (prev >= n) {
      return -1; // Element not found
    }
  }

  // Linear search within the block
  while (array[prev] < x) {
    prev++;
    if (prev == min(blockSize, n)) {
      return -1; // Element not found
    }
  }

  if (array[prev] == x) {
    return prev; // Element found at index prev
  }

  return -1; // Element not found
}

void main() {
  List<int> list = [1, 2, 3, 4, 5];
  int value = 4;

  int result = jumpSearch(list, value);

  if (result != -1) {
    print('Element $value found at index $result');
  } else {
    print('Element $value not found in the list');
  }
}