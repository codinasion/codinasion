#include <iostream>
#include <climits>

void findSmallestTwo(int arr[], int size) {
    if (size < 2) {
        std::cout << "Array size should be at least 2." << std::endl;
        return;
    }

    int firstSmallest = INT_MAX;
    int secondSmallest = INT_MAX;

    for (int i = 0; i < size; ++i) {
        if (arr[i] < firstSmallest) {
            secondSmallest = firstSmallest;
            firstSmallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] != firstSmallest) {
            secondSmallest = arr[i];
        }
    }

    if (secondSmallest == INT_MAX) {
        std::cout << "There are not enough distinct elements in the array." << std::endl;
    } else {
        std::cout << "The smallest two elements are " << firstSmallest << " and " << secondSmallest << std::endl;
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

    findSmallestTwo(arr, size);

    return 0;
}
