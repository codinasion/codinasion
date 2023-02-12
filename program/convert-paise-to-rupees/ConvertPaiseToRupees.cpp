/*
Author -> Abhinav Prabhat
Date   -> 28-01-2023
*/

#include <iostream>

using namespace std;

int main()
{

    float paisa;
    cout << "\n\nEnter the amount in paise -> ";
    cin >> paisa;

    float rupee;

    cout << "\n\nAmount in rupee is -> " << paisa / 100 << endl
         << endl;

    return 0;
}