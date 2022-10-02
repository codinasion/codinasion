#include <bits/stdc++.h>
using namespace std;
int main()
{
        long long int n, sum = 0;
        cin >> n;
        long long int a[n];
        for (int i = 0; i < n; i++)
        {
                cin >> a[i];
        }
        for (int i = 1; i < n; i++)
        {
                if (a[i - 1] > a[i])
                {
                        sum += a[i - 1] - a[i];
                        a[i] += a[i - 1] - a[i];
                }
        }
        cout << sum;
        return 0;
}
