// Calculates the sum of square of the inputted numbers.
#include <bits/stdc++.h>
#define ll long long
using namespace std;

int main(){
    ll n;   cin>>n;
    ll sum=0;
    for(int i=0;i<n;i++){
        ll input;   cin>>input;
        sum+= input*input;
    }

    cout<<sum<<endl;

    return 0;
}

/*
Contributed by : Kartikeya Saini
*/