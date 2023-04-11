// To find the power of a number...
#include <bits/stdc++.h>
#define ll long long // For typing ease.
using namespace std;

int main(){
    ll n;   cin>>n; //Base
    ll p;   cin>>p; //Power

    //Using std function:
    // cout<<pow(n,p)<<endl;

    // Using loops:
    ll product = 1;
    for(int i=0;i<p;i++){
        product *= n;
    }
    cout<<product<<endl;
    return 0;
}

/*
Author : Kartikeya Saini
*/