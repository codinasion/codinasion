#include <bits/stdc++.h>
#define ll long long // fot typing ease ll = long long
using namespace std;

int main(){
    // configuring the input
    cout<<"Enter the length of the array:";
    ll n;   cin>>n;
    ll a[n];
    ll ans[n]; // temp

    //Taking array input
    cout<<"Enter the "<<n<<" numbers : ";
    for(int i=0;i<n;i++){
        cin>>a[i];
    }

    //Reverse the array
    for(int i=0;i<n;i++){
        ans[i] = a[n-1-i];
    }

    // Changing the reverse array to the inputted array.
    for(int i=0;i<n;i++){
        a[i]=ans[i];
    }

    // Show the reversed array
    cout<<"The reversed array is :"<<endl;
    for(int i=0;i<n;i++){
        cout<<a[i]<<" ";
    }
    return 0;
}

/*
Author : Kartikeya Saini
*/