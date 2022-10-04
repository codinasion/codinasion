#include<bits/stdc++.h>
using namespace std;
void SioErato(int n)
{
    int i;
    bool t[n + 1];
    fill(t, t + n + 1, true);
    t[0] = false, t[1] = false;
    for (i = 2; i * i <= n; i++)
    {
        for (int j = 2 * i; j <= n; j += i)
            if (j % i == 0)
                t[j] = false;
    }
    for (i = 1; i <= n; i++)
        if (t[i] == true)
            cout << i << " ";
}
int main()
{
    int a,b;
    cout<<"Enter range start and range end: ";
    cin>>a>>b;
    for (int i = a; i <= b; i++){
        if (i == 1 || i == 0)
            continue;
        int f = 1;
        for (int j = 2; j <= i / 2; ++j)
            if (i % j == 0){
                f = 0;
                break;
            }
        if (f == 1)
            cout << i << " ";
    }
    return 0;
}