#include <bits/stdc++.h>

using namespace std;

int main()
{

    int n;
    cin >> n;

    vector<int> v(n);

    for (int i = 0; i < n; i++)
    {
        cin >> v[i];
    }

    int maxx = INT_MIN;

    for (int i = 0; i < n; i++)
    {

        if (maxx < v[i])
        {

            maxx = v[i];
        }
    }
    cout << "Maximum : " << maxx;

    return 0;
}