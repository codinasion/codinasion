#include <stdio.h>

int sumOfDigits(int n) {
  if (n == 0) return 0;
  return (n % 10) + sumOfDigits(n / 10);
}

void main() {
  int n;
  printf("Enter a number: ");
  scanf("%d",&n);
  
  int sum = sumOfDigits(n);
  int digit_count = 0;
  
  while (n > 0) {
    digit_count++;
    n /= 10;
  }
  double average = (double)sum/digit_count;
  printf("Average of digits: %lf\n",average);

}
