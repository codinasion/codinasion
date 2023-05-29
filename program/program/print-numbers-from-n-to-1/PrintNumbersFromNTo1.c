#include <stdio.h>

// Write a C program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

void main()
{
    int num;

    printf("Enter number : ");
    scanf("%d", &num);
    
    int i = num;

    while(i != 0)
    {
      printf("%d ", i);

      i = i - 1;
    }
}
