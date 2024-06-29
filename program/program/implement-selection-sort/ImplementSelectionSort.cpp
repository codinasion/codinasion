#include <iostream>
#include <vector>

void selectionSort(std::vector<int>& list) {
    int n = list.size();
    
    for (int i = 0; i < n - 1; ++i) {
        // Set current element as minimum
        int minIndex = i;
        
        // Check the element to be minimum
        for (int j = i + 1; j < n; ++j) {
            if (list[j] < list[minIndex]) {
                minIndex = j;
            }
        }
        
        // Swap the minimum element with the current element
        if (minIndex != i) {
            std::swap(list[i], list[minIndex]);
        }
    }
}

int main() {
    std::vector<int> unsortedList = {64, 25, 12, 22, 11};
    
    selectionSort(unsortedList);
    
    std::cout << "Sorted list: ";
    for (int num : unsortedList) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
    
    return 0;
}
