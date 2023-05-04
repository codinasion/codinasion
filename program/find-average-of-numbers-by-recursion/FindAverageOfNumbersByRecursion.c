#include <stdio.h>

float findSumByRecursion(int a[], int index, int n)
{
    if (index == n)
    {
        return 0;
    }

    return a[index] + findSumByRecursion(a, index + 1, n);
}
int main()
{
    int input[10000], n;
    printf("Enter the number of elements: ");
    scanf("%d", &n);

    for (int i = 0; i < n; i++)
    {
        scanf("%d", &input[i]);
    }

    float sum = findSumByRecursion(input, 0, n);

    printf("Average : %f\n", sum / n);
}