#include <iostream>
using namespace std;

double FindAverageByRecursion(double arr[], int index, int num)
{
    if (index == num)
    {
        return 0;
    }
    double total = arr[index] + FindAverageByRecursion(arr, index + 1, num);
    if (index == 0)
        return total / num;
    return total;
}
int main()
{
    int numEle = 6;
    cout << "Enter the number of elements :";
    // cin >> numEle;

    double arr[] = {1,2,3,4,5,6};
    // for (int i = 0; i < numEle; ++i)
    // {
    //     cin >> arr[i];
    // }
    cout << "Average : " << FindAverageByRecursion(arr, 0, numEle);
    return 0;
}