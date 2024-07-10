#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int sum_of_digits(int n)
{
    if(n==0)
    {
        return 0;
    }
    int x=n%10;
    int s=n/10;
    return x+sum_of_digits(s);
}


int main() {
	int number;
	cin>>number;
	cout<<sum_of_digits(number)<<endl;
	
	
	return 0;
}