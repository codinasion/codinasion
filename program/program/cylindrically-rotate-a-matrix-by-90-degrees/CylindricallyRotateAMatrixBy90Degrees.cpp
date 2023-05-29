#include <bits/stdc++.h>
using namespace std;
 
#define N 3

void rotate90Clockwise(int arr[N][N])
{
    for (int j = 0; j < N; j++)
    {
        for (int i = N - 1; i >= 0; i--)
            cout << arr[i][j] << " ";
        cout << '\n';
    }
}

int main()
{
    int arr[N][N] = { { 1, 2, 3 },
                      { 4, 5, 6 },
                      { 7, 8, 9 }};
    rotate90Clockwise(arr);
    return 0;
}
 
