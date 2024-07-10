#include <bits/stdc++.h>
using namespace std;
int main()
{
    string s;
    getline(cin, s);
    char arr[s.size()];

    for (int i = 0; i < s.size(); i++)
    {
        arr[i] = s[i];
    }

    for (int i = 0; i < s.size(); i++)
    {
        cout << arr[i] << " ";
    }
}