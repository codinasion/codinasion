#include <iostream>
using namespace std;

int main() {
    double pounds, kilograms;
    const double CONVERSION_FACTOR = 0.453592;

    // Get input from user
    cout << "Enter weight in pounds: ";
    cin >> pounds;

    // Convert pounds to kilograms
    kilograms = pounds * CONVERSION_FACTOR;

    // Display result
    cout << pounds << " pounds is equal to " << kilograms << " kilograms." << endl;

    return 0;
}