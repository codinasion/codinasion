/*
Author -> Abhinav Prabhat
Date   -> 11-02-2023
*/

#include <iostream>

using namespace std;

int main()
{

    float miles;
    cout << "\n\nEnter the distance in miles -> ";
    cin >> miles;

    cout << "Distance in kilometers -> " << miles * 1.609 << endl
         << endl;

    return 0;
}