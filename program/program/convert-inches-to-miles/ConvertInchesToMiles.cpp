/*
Author -> Abhinav Prabhat
Date   -> 11-02-2023
*/

#include <iostream>

using namespace std;

int main()
{

    float inches;
    cout << "Enter the distance in inches -> ";
    cin >> inches;

    cout << "Distance in miles -> " << inches / 63360 << endl
         << endl;

    return 0;
}