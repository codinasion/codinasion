#include<iostream>
#include <bits/stdc++.h>
using namespace std;


int hexadecimalToDecimal(string hex)
{
	int n = hex.size();

	int base = 1;

	int dec = 0;

	for (int i = n - 1; i >= 0; i--) {
        
		if (hex[i] >= '0' && hex[i] <= '9') {
			dec += (int(hex[i]) - 48) * base;
			base = base * 16;
		}

		else if (hex[i] >= 'A' && hex[i] <= 'F') {
			dec += (int(hex[i]) - 55) * base;
			base = base * 16;
		}
	}
	return dec;
}

int main()
{
    string hex;
	cout<<"Enter a hexadecimel value : ";
    cin>>hex;
	cout <<" hexadecimel value : " <<(hexadecimalToDecimal(hex));
	return 0;
}
