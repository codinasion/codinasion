#include <iostream>

int main() {
    int n, sum = 0;
    std::cout << "Enter numbers to sum up (enter a non-numeric value to quit):" << std::endl;

    // Read in numbers and add them to the sum variable
    while (std::cin >> n) {
        sum += n;
    }

    // Output the sum
    std::cout << "The sum of the entered numbers is " << sum << std::endl;

    return 0;
}
