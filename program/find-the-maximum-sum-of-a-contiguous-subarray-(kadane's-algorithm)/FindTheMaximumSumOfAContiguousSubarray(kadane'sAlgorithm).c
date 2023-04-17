#include <stdio.h>

int maximumSumOfAContiguousSubarray(int a[], int n)
{
    int max_sum = a[0], current_sum = 0;

    for (int i = 0; i < n; i++)
    {
        current_sum += a[i];
        if (current_sum > max_sum)
        {
            max_sum = current_sum;
        }
        if (current_sum < 0)
        {
            current_sum = 0;
        }
    }
    return max_sum;
}
int main()
{
    int n;
    scanf("%d", &n);
    int a[n];
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &a[i]);
    }
    printf("%d\n", maximumSumOfAContiguousSubarray(a, n));
    return 0;
}