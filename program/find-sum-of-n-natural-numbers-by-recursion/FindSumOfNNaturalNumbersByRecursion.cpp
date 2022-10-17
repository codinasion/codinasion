#include <iostream>
using namespace std;
int sum_of_natural_numbers(int n)
{
if(n == 0)
return 0;
return n + sum_of_natural_numbers(n - 1);
}

int main()
{
int n;
cout << "\nEnter the number : ";
cin >> n;
cout << "\n Sum of " << n << " Natural Numbers is "<< sum_of_natural_numbers(n);
cout << endl;
return 0;
}
