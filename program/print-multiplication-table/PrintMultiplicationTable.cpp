/*
Author -> Abhinav Prabhat
Date   -> 28-01-2023
*/

#include <iostream>

using namespace std;

int main()
{

    int number;

    cout << "\n\nEnter the number whose table you want -> ";
    cin >> number;

    int temp = 1;

    while (temp < 11)
    {
        cout << number << " x " << temp << " = " << number * temp << endl;
        temp++;
    }

    return 0;
}
