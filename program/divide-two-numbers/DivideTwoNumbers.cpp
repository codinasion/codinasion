#include <iostream> // cout, cin
using namespace std;

float Divide2Numbers(int x, int y);

int main()
{
    int x = 0;
    int y = 0;

    cout << "please enter two numbers to divide:" << endl;

    cin >> x;
    cin >> y;

    cout << Divide2Numbers(x,y);
}

float Divide2Numbers(int x, int y)
{
    return ((static_cast<float> (x)) / y);
}
