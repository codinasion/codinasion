#include <stdio.h>
#include <stdlib.h>

// Function to compare elements for qsort
int compare(const void * a, const void * b) {
    return (*(int*)a - *(int*)b);
}

// Function to find and print the smallest two elements
void findSmallestTwo(int arr[], int size) {
    // Sort the array
    qsort(arr, size, sizeof(int), compare);

    // Print the first two elements
    printf("Smallest two elements: %d %d\n", arr[0], arr[1]);
}

int main() {
    int arr1[] = {12, 13, 1, 10, 34, 1};
    int size1 = sizeof(arr1) / sizeof(arr1[0]);

    printf("Input 1: ");
    for (int i = 0; i < size1; i++) {
        printf("%d ", arr1[i]);
    }
    printf("\n");
    findSmallestTwo(arr1, size1);

    printf("\n");

    int arr2[] = {10, 5, 10};
    int size2 = sizeof(arr2) / sizeof(arr2[0]);

    printf("Input 2: ");
    for (int i = 0; i < size2; i++) {
        printf("%d ", arr2[i]);
    }
    printf("\n");
    findSmallestTwo(arr2, size2);

    return 0;
}
