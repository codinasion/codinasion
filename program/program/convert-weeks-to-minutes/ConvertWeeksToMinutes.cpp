/**
 * Write a C++ program to convert weeks to minutes
 * 1 week = 7 days = 168 hours = 10080 minutes
 * Input  : 5
 * Output : 50400
 */

#include <iostream>
#include <cmath>
using namespace std;

int weeksToMinutes(int weeks){
    return (weeks*10080);
}

int main(){
    int n;
    cout << "Enter number of weeks: ";
    cin >> n;
    cout << "Minutes: " << weeksToMinutes(n) << endl;
    return 0;
}