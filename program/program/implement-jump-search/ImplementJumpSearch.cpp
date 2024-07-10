#include <iostream>
#include <vector>
#include <cmath>

// Jump Search function
int jumpSearch(std::vector<int>& arr, int target) {
    int n = arr.size();
    int step = sqrt(n); // Jump step size

    int prev = 0;
    while (arr[std::min(step, n) - 1] < target) {
        prev = step;
        step += sqrt(n);
        if (prev >= n)
            return -1; // Element not found
    }

    while (arr[prev] < target) {
        prev++;
        if (prev == std::min(step, n))
            return -1; // Element not found
    }

    if (arr[prev] == target)
        return prev;

    return -1; // Element not found
}

int main() {
    std::vector<int> arr;
    int n, target;

    std::cout << "Enter the number of elements in the array: ";
    std::cin >> n;

    std::cout << "Enter " << n << " sorted elements:" << std::endl;
    for (int i = 0; i < n; i++) {
        int num;
        std::cin >> num;
        arr.push_back(num);
    }

    std::cout << "Enter the element you want to search for: ";
    std::cin >> target;

    int index = jumpSearch(arr, target);

    if (index != -1) {
        std::cout << "Element " << target << " found at index " << index << std::endl;
    } else {
        std::cout << "Element " << target << " not found in the array." << std::endl;
    }

    return 0;
}
