#include <stdio.h>
int main()
{
    int numEl, i, size = 10;
    float num[size], result = 0.00, avg;

    printf("Enter the numbers of elements: ");
    scanf("%d", &numEl);
    while (numEl > size || numEl < 1)
    {
        printf("Enter a valid range (1 - 10).\n");
        printf("Enter the number of element again: ");
        scanf("%d", &numEl);
    }
    for (i = 0; i < numEl; ++i)
    {
        scanf("%f", &num[i]);
        result += num[i];
    }

    avg = result / numEl;
    printf("Average :%.2f", avg);
    return 0;
}
