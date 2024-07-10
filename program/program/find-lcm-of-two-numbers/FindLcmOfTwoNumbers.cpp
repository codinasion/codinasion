/*
Author -> Abhinav Prabhat
Date   -> 29-01-2023
*/

#include <iostream>

using namespace std;

int hcf_calc(int a, int b)
{

    if (a == 0)
    {
        return b;
    }
    if (b == 0)
    {
        return a;
    }

    while (a != b)
    {
        if (a > b)
        {
            a -= b;
        }

        else
        {
            b -= a;
        }
    }

    return a;
}

int main()
{

    int num1, num2;

    cout << "\n\nEnter two numbers whose LCM you want -> ";
    cin >> num1 >> num2;

    int hcf = hcf_calc(num1, num2);

    int lcm = (num1 * num2) / hcf;

    cout << "\n\nLCM of " << num1 << " & " << num2 << " is -> " << lcm << endl
         << endl;
    return 0;
}