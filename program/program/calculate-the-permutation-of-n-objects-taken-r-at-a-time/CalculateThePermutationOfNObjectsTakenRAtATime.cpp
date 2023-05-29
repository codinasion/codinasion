#include <iostream>

using namespace std;

int factorial(int n) {
  if (n == 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

int main() {
  int n, r;
  cout << "Enter value of n and r: ";
  cin >> n >> r;

  if (r > n) {
    cout << "Error: r should be less than or equal to n." << endl;
    return 1;
  }

  int result = 1;

  if (r == 0) {
    result = 1;
  } else if (r == 1) {
    result = n;
  } else if (n == r || n - 1 == r) {
    result = factorial(n);
  } else {
    for (int i = 0; i < n - r; ++i) {
      result *= n - i;
    }
  }

  cout << "Permutation of " << n << " objects taken " << r << " at a time is: " << result << endl;
  return 0;
}
