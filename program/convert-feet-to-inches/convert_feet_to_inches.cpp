// This programme converts feet to inches.
#include <bits/stdc++.h>
using namespace std;

long long convertFeetToInch(long long n){
    long long ans = n*12;
    return ans;
}

int main(){
    long long input;    cin>>input;
    cout<<convertFeetToInch(input)<<endl;
    return 0;
}

/*
Contributed by : Kartikeya Saini
*/