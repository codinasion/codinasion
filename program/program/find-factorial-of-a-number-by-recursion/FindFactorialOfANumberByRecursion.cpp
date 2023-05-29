#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int factorial(int n)
{
    if(n==0)
    {
        return 1;
    }
    return n*factorial(n-1);
}


int main() {
	int number;
	cin>>number;
	cout<<factorial(number)<<endl;
	
	
	return 0;
}