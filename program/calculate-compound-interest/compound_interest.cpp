#include <bits/stdc++.h>
#include <iostream>
using namespace std;

int main()
{
	double principal,rate,time;
    cout<<"Enter Principal amount : ";
    cin>>principal;
    cout<<"Enter rate of interest : ";
    cin>>rate;
    cout<<"Enter total time : ";
    cin>>time;
    
    double CI= principal * (pow((1 + rate/100),time));
    cout<<"Compound Interest : "<<CI;
	return 0;
}
