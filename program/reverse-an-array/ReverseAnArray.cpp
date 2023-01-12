#include <bits/stdc++.h>
#define ll long long // fot typing ease ll = long long
using namespace std;

int main(){
    // configuring the input
    cout<<"Enter the length of the array:";
    ll n;   cin>>n;
    ll a[n];
    ll ans[n];

    //Taking array input
    cout<<"Enter the "<<n<<" numbers : ";
    for(int i=0;i<n;i++){
        cin>>a[i];
    }

    //Reverse the array
    for(int i=0;i<n;i++){
        ans[i] = a[n-1-i];
    }

    // Show the reversed array
    cout<<"The reversed array is :"<<endl;
    for(int i=0;i<n;i++){
        cout<<ans[i]<<" ";
    }
    return 0;
}

/*
Author : Kartikeya Saini
*/