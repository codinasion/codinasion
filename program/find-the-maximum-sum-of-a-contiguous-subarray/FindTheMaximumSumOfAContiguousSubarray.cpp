#include <iostream>
#include <limits.h>

int main() {
  const int maxArraySize = 100;
  int arr[maxArraySize];
  int n = 0;

  std::cout << "Enter the size of array: ";
  std::cin >> n;

  if(n > maxArraySize) {
    std::cout << "Error: Input array size cannot be greater than " << maxArraySize << std::endl;
    return 1;
  }

  std::cout << "Enter the input values:" << std::endl;

  for(int i = 0; i < n; i++) {
    std::cin >> arr[i];
  }

  long long int sum = 0;
  long long int maxSum = LLONG_MIN;

  for(int i = 0; i < n; i++) {
    sum = 0;
    for(int j = i; j < n; j++) {
      sum += arr[j];
      maxSum = std::max(maxSum, sum);
    }
  }

  
  std::cout << "Maximum sum of contiguous elements of given array is: " << maxSum << std::endl;

  return 0;
}