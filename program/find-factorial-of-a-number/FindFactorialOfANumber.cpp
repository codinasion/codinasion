// Programme to find the factorial of N

#include <bits/stdc++.h>
#define ll long long // for typing ease.
using namespace std;

int main(){
    cout<<"Enter the number N:";
    ll n;   cin>>n;
    ll product=1;

    // Calculating factorial.
    for(int i=n;i>0;i--){
        product = product * i;
    }

    // displaying output;
    cout<<"The factorial of "<<n<<" is "<<product<<endl;

    return 0;
}

/*
Author : Kartikeya Saini
*/