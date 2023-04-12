#include <iostream>

using namespace std;

// Recursive Function calculate hcf of two number

int HcF(int a, int b)
{
    return b == 0 ? a : HcF(b, a % b);
}

int main()
{

    // Enter the two numbers

    int a, b;
    cin >> a >> b;

    int hcf = HcF(a, b);
    int lcm;

    // Finding the lcm by using the formula n1*n2 / hcf

    lcm = (a * b) / hcf;

    cout << "LCM of " << a << " ans " << b << " is " << lcm;

    return 0;
}