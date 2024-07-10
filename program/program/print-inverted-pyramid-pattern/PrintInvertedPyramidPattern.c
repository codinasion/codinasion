#include <stdio.h>

int main()
{

    int number, i, j, limitNumber;
    printf("enter a number");
    scanf("%d", &number);

    limitNumber = number;

    for (i = 1; i <= number; i++)
    {

        for (j = 1; j <= limitNumber; j++)
        {
            printf("%d ", j);
        }
        printf("\n");

        limitNumber--;
    }

    return 0;
}