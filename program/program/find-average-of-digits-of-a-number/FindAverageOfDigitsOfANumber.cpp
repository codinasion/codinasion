//Programme to find average of the digits
#include <bits/stdc++.h>
#define ll long long // for typing ease 
using namespace std;
int main(){
    // Taking input
    cout<<"Enter the number :";
    string s;    cin>>s;
    double sum=0;

    // Calulation of the sum of the numbers 
    for(ll i=0;i<s.length();i++){
            sum += s[i] - '0';
    }

    // displaying output
    cout<<"The average of the digits of this number is :"<<sum/s.length()<<endl;
    return 0;
}

/*
Author : Kartikeya Saini
*/
 