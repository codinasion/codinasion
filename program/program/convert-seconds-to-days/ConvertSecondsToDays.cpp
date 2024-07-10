/*
Author -> Abhinav Prabhat
Date   -> 28-01-2023
*/

#include <iostream>

using namespace std;

int main()
{

    float seconds;
    cout << "\n\nSeconds -> ";
    cin >> seconds;

    float days;
    days = seconds / (60 * 60 * 24);

    cout << "\nNumber of days in " << seconds << " seconds is -> " << days << endl
         << endl;

    return 0;
}