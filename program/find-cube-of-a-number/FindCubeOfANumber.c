#include <stdio.h>

int cubeOfNumber(int number)
{
    return number * number * number;
}

int main()
{
    int inputNumber;
    printf("Enter a number to get its cube\n");
    scanf("%d", &inputNumber);
    printf("Input : %d \nOutput: %d", inputNumber, cubeOfNumber(inputNumber));
    return 0;
}