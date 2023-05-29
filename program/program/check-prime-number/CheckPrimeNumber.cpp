#include <iostream.h>
using namespace std;
int main()
{
    int a, number, count = 0;
    cout << "enter number to check for prime or not prime :";
    cin >> number;
    for (a = 1; a <= number; a++)
        if (number % a == 0)
            count++;
    if (count == 2)
        cout << "prime number\n";
    else
        cout << "it is not a prime number\n";
    return 0;
}