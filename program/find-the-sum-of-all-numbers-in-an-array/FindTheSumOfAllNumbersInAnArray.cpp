#include <iostream>
using namespace std;
int main()
{
    int n;
    cout << "Enter size of the array:" << endl;
    cin >> n;
    int array[n];
    int sum = 0;
    cout << "Enter the numbers in the array:" << endl;
    for (int i = 0; i < n; i++)
    {
        cin >> array[i];
        sum += array[i];
    }
    cout << "Output:" << sum << endl;
    return 0;
}