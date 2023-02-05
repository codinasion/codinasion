#include <iostream>

using namespace std;

int main()
{

    int size;
    cout << "Enter the size of array -> ";
    cin >> size;

    int arr[size];
    int temp = size;
    cout << "Enter the elements of array -> \n";
    int i = 0;
    while (temp--)
    {
        cin >> arr[i];
        i++;
    }
    int sum = 0;
    i = 0;

    while (size--)
    {
        sum += arr[i];
        i++;
    }

    cout << "Sum of all numbers in array is -> " << sum << endl
         << endl;

    return 0;
}