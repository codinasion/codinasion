// Programme to find the smallest element in the array...
#include <bits/stdc++.h>
#define ll long long // For typing ease.
using namespace std;

int main(){
    // Taking array limit input:
    cout<<"Enter the length of the array :";
    ll n;   cin>>n;
    ll a[n];
    for(int i=0;i<n;i++){
        cin>>a[i];
    }

    //Finding the smallest element present in the array :

    ll min = INT_MAX;
    for(int i=0;i<n;i++){
        if(a[i]<min){
            min=a[i];
        }
    }

    //Returning the value :
    cout<<"The smallest element present in the array is : "<<min<<endl;
    return 0;
}

/*
Author : Kartikeya Saini
*/
 