/*
Author -> Abhinav Prabhat
Date   -> 11-02-2023
*/

#include <iostream>

using namespace std;

int main()
{

    float radius;
    cout << "\n\nEnter the radius -> ";
    cin >> radius;

    cout << "Volume -> " << ((radius * radius * radius) * 4 * 3.14) / 3 << endl
         << endl;

    return 0;
}