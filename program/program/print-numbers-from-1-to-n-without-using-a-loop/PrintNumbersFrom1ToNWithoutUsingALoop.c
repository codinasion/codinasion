#include <stdio.h>

void printNumbersFromOneToN(int n)
{

    if (n <= 0)
    {
        return;
    }

    printNumbersFromOneToN(n - 1);

    printf("%d ", n);
}

int main()
{
    int input;

    printf("Enter an Integer: \n");
    scanf("%d", &input);

    printNumbersFromOneToN(input);

    return 0;
}

/*
  Contributed by Medmly20208
*/
