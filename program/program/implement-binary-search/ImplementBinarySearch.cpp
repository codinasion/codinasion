#include <bits/stdc++.h>
using namespace std;

int binarySearch(int arr[], int size, int key) {
  int low = 0;
  int high = size - 1;
  while (low <= high) {
    int mid = low + (high - low) / 2;
    if (arr[mid] == key) {
      return mid;
    } else if (arr[mid] < key) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

int main() {
  int size;
  cout << "Enter the size of the array: ";
  cin >> size;
  int arr[size];
  cout << "Enter the elements of the array in sorted order:\n";
  for (int i = 0; i < size; ++i) {
    cout << "Enter element " << (i + 1) << ": ";
    cin >> arr[i];
  }
  int key;
  cout << "Enter the key to search: ";
  cin >> key;
  int result = binarySearch(arr, size, key);
  if (result != -1) {
    cout << "Element found at index: " << result << endl;
  } else {
    cout << "Element not found in the array." << endl;
  }
  return 0;
}
