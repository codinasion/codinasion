#include <stdio.h>

int sumByRecursion(int n);

int main() {

  int num;
  printf("Enter a positive integer: ");
  scanf("%d", &num);
  printf("Sum = %d", sumByRecursion(num));
  return 0;
}

int sumByRecursion(int n) {
  if (n != 0)
    return n + sumByRecursion(n - 1);
  else
    return n;
}
