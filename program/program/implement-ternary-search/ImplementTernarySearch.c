#include <stdio.h>

int ternary_search(int A[], int n, int value) {
    int l = 0;
    int r = n - 1;

    while (l <= r) {
        int partition_size = (r - l) / 3;
        int mid1 = l + partition_size;
        int mid2 = r - partition_size;

        if (A[mid1] == value)
            return mid1;

        if (A[mid2] == value)
            return mid2;

        if (value < A[mid1])
            r = mid1 - 1;
        else if (value > A[mid2])
            l = mid2 + 1;
        else {
            l = mid1 + 1;
            r = mid2 - 1;
        }
    }

    return -1;
}

int main() {
    int n;

    printf("Enter the size of the array: ");
    scanf("%d", &n);

    int A[n];

    printf("Enter the sorted array elements:\n");
    for (int i = 0; i < n; i++) {
        scanf("%d", &A[i]);
    }

    int value;

    printf("Enter the value to be searched: ");
    scanf("%d", &value);

    int result = ternary_search(A, n, value);

    if (result != -1)
        printf("Element found at index %d\n", result);
    else
        printf("Element not found\n");

    return 0;
}
