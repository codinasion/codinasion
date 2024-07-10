#include<iostream>

void moveZeroesToEnd(int arr[], int size) {
    // Initialize a variable to keep track of the position to insert non-zero elements
    int nonZeroIndex = 0;

    // Iterate through the array
    for (int i = 0; i < size; i++) {
        // If the current element is non-zero, move it to the front of the array
        if (arr[i] != 0) {
            arr[nonZeroIndex] = arr[i];
            nonZeroIndex++;
        }
    }

    // Fill the remaining positions with zeroes
    while (nonZeroIndex < size) {
        arr[nonZeroIndex] = 0;
        nonZeroIndex++;
    }
}

// Function to print an array
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
}

int main() {
    int arr1[] = {1, 2, 0, 4, 3, 0, 5, 0};
    int size1 = sizeof(arr1) / sizeof(arr1[0]);

    int arr2[] = {1, 2, 0, 0, 0, 3, 6};
    int size2 = sizeof(arr2) / sizeof(arr2[0]);

    // Move zeroes to the end of the arrays
    moveZeroesToEnd(arr1, size1);
    moveZeroesToEnd(arr2, size2);

    // Print the modified arrays
    std::cout << "Output 1: ";
    printArray(arr1, size1);

    std::cout << "Output 2: ";
    printArray(arr2, size2);

    return 0;
}
