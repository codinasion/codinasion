#include <stdio.h>

int main()
{
  float num, result;
  
  printf("Please enter inches: ");
  scanf("%f", &num);

  result = num / 12.0;

  printf("%0.2f inches equals to %0.2f feet", num, result);
  
  return 0;
}