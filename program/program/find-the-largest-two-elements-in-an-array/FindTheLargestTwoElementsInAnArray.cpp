#include <iostream>
#include <climits>

void findLargestTwo(int arr[], int size) {
    if (size < 2) {
        std::cout << "Array size should be at least 2." << std::endl;
        return;
    }

    int firstLargest = INT_MIN;
    int secondLargest = INT_MIN;

    for (int i = 0; i < size; ++i) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
            secondLargest = arr[i];
        }
    }

    if (secondLargest == INT_MIN) {
        std::cout << "There are not enough distinct elements in the array." << std::endl;
    } else {
        std::cout << "The largest two elements are " << firstLargest << " and " << secondLargest << std::endl;
    }
}

int main() {
    int size;

    std::cout << "Enter the size of the array: ";
    std::cin >> size;

    if (size <= 0) {
        std::cout << "Invalid array size." << std::endl;
        return 1;
    }

    int arr[size];

    std::cout << "Enter the elements of the array: ";
    for (int i = 0; i < size; ++i) {
        std::cin >> arr[i];
    }

    findLargestTwo(arr, size);

    return 0;
}
