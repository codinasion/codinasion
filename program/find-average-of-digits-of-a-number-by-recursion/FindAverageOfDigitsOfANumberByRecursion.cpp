#include <iostream>
using namespace std;
int sumOfDigits(int n) {
  if (n == 0) {
    return 0;
  }
  return (n % 10) + sumOfDigits(n / 10);
}

int main() {
  int n;
  cout << "Enter a number: ";
  cin >> n;
  int sum = sumOfDigits(n);
  int digit_count = 0;
  while (n > 0) {
    digit_count++;
    n /= 10;
  }
  cout << "Average of digits: " << (double)sum/digit_count << endl;
  return 0;
}
