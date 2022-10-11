// Write a C++ program to convert weeks to seconds

// 1 week = 7 days = 168 hours = 10080 minutes = 604800 seconds

// Input  : 5
// Output : 3024000

#include <iostream>
#include <cmath>
using namespace std;


int main(){
    int weaks;
    cout << "Enter number of weeks: ";
    cin >> weaks;
    int num_of_seconds = weaks * 604800;
    cout << "Seconds: " << num_of_seconds << endl;
    return 0;
}

// contribputed by technical amanjeet
