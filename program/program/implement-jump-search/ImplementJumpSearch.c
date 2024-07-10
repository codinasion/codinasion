#include <stdio.h>
#include <math.h>

int jumpSearch(int arr[], int n, int x) {
    int blockSize = sqrt(n);
    int prev = 0;

    while (arr[(int)(fmin(blockSize, n) -1 )] < x) {
        prev = blockSize;
        blockSize += sqrt(n);
        if (prev >= n)
            return -1; 
    }

    while (arr[prev] < x) {
        prev++;

        if (prev == fmin(blockSize, n))
            return -1; 
    }

    if (arr[prev] == x)
        return prev; 

    return -1; 
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = sizeof(arr) / sizeof(arr[0]);

    int x = 5;
    int result = jumpSearch(arr, n, x);

    if (result != -1)
        printf("Output: %d\n", result);
    else
        printf("Value not found in the list\n");

    return 0;
}
