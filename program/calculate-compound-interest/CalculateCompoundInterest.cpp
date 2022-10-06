#include<bits/stdc++.h>
using namespace std;

int main()
{
    // declaring variables
    // p=Principal amount
    // r=Rate of interest
    // t=time
    // ci=compound interest
    long double p,r,t,ci;
    
    // take input
    cout<<"Enter Principal amount : ";
    cin>>p;
    cout<<"\n";  
    cout<<"Enter Rate of interest : ";
    cin>>r;
    cout<<"\n";
    cout<<"Enter time : ";
    cin>>t;
    cout<<"\n";
    
    // Compound interest = principal amount * (1 + rate of interest) ^ time
    ci= p * pow((1+(r/100)),t);
    
    cout<<"Compound Interest = ";
    cout<<ci;
  
}