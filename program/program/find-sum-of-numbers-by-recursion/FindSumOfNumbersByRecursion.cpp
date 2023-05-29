#include <iostream>
using namespace std;

int sumOfNumbersByRecursion(int a[], int n, int x)
{
    if (n == x)
    {
        return 0;
    }
    return a[x] + sumOfNumbersByRecursion(a, n, x + 1);
}
int main()
{
    int n;
    cin >> n;
    int a[n];
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
    }
    cout << sumOfNumbersByRecursion(a, n, 0) << "\n";
    return 0;
}