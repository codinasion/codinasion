/*
Author -> Abhinav Prabhat
Date   -> 28-01-2023
*/

/*

#   Important Point
    The given code is longer than usual because I have handled all the corner cases ,
    Like all the elements being same and more.

*/
#include <iostream>

using namespace std;

int main()
{

    int size;
    cout << "\n\nEnter the size of the array -> ";
    cin >> size;

    int arr[size];

    cout << "\nEnter the elements of array -> \n";
    int temp = 0;

    while (temp < size)
    {
        cin >> arr[temp];
        temp++;
    }

    int largest = INT_MIN;

    for (int i = 0; i < temp; i++)
    {
        if (arr[i] > largest)
        {
            largest = arr[i];
        }
    }

    for (int i = 0; i < temp; i++)
    {
        if (arr[i] == largest)
        {
            arr[i] = INT_MIN;
        }
    }

    largest = INT_MIN;
    int tick = 0;

    for (int i = 0; i < temp; i++)
    {
        if (arr[i] > largest)
        {
            tick = 1;
            largest = arr[i];
        }
    }
    if (tick == 1)
    {
        cout << "\nThe second largest number in array is -> " << largest << endl
             << endl;
    }
    else
    {
        cout << "\nAll the elements are equal" << endl
             << endl;
    }

    return 0;
}