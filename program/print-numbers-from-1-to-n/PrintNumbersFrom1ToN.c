#include <stdio.h>
#include <stdlib.h>

int main()
{
    int number, i;
    printf("Input: ");
    scanf("%d", &number);
    for (i = 1; i <= number; ++i)
    {
        printf("%d", i);
    }
    return 0;
}
