#include <stdio.h>
#include <conio.h> 
int main()
{
  int n, first = 0, second = 1, result, i;
  printf("Please give an input upto you want to print series : \n");
  scanf("%d", &n);
  printf("Fibonacci Series is:\n");
  for (i = 0; i < n; i++)
  {
    if (i <= 1)
      result = i;
    else
    {
      result = first + second;
      first = second;
      second = result;
    }
    printf("%d\n", result);
  } 
  return 0;
} 
