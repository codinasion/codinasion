#include <stdio.h>

int maxSubArray(int arr[], int n)
{
    int max_so_far = arr[0];
    int max_ending_here = arr[0];
    int i;

    for (i = 1; i < n; i++)
    {
        max_ending_here = max(arr[i], max_ending_here + arr[i]);
        max_so_far = max(max_so_far, max_ending_here);
    }
    return max_so_far;
}

int main()
{
    int arr[] = {-2, -3, 4, -1, -2, 1, 5, -3};
    int n = sizeof(arr)/sizeof(arr[0]);
    int max_sum = maxSubArray(arr, n);
    printf("Maximum subarray sum is %d", max_sum);
    return 0;
}
