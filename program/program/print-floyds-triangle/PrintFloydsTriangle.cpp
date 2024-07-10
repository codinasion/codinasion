#include <bits/stdc++.h>
using namespace std;
 
void printFloydTriangle(int n)
{
    int i, j, val = 1;
    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= i; j++)
            cout << val++ << " ";
        cout << endl;
    }
}
 
int main()
{
    printFloydTriangle(5);
    return 0;
}
