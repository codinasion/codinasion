#include <stdio.h>

// Function declarations
void swap(int *x, int *y);
void selectionSort(int arr[], size_t n);
void printArray(const int arr[], size_t size);

int main() {
    // Sample array to be sorted
    int arr[] = {8, 5, 2, 6, 9, 3, 1, 4, 0, 7};
    size_t n = sizeof(arr) / sizeof(arr[0]);

    // Sorting the array using the selection sort algorithm
    selectionSort(arr, n);

    // Displaying the sorted array
    printf("Sorted array: \n");
    printArray(arr, n);

    return 0;
}

// Function to swap two integers
void swap(int *x, int *y) {
    int temp = *x;
    *x = *y;
    *y = temp;
}

// Function to perform selection sort on an array
void selectionSort(int arr[], size_t n) {
    // Traverse through all array elements
    for (size_t i = 0; i < n; i++) {
        // set current element as minimum
        size_t min_index = i;

        // Compare with the rest of the elements
        for (size_t j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }

        // Swap the found minimum element with the current element
        if (min_index != i) {
            swap(&arr[min_index], &arr[i]);
        }
    }
}

// Function to print elements of an array
void printArray(const int arr[], size_t size) {
    for (size_t i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}
