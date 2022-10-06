#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int FindSumOfCubesOfNumbersByRecursion(vector<int> arr, int n){
    if(n==1) return pow(arr[0],3);
    return pow(arr[n-1],3)+FindSumOfCubesOfNumbersByRecursion(arr,n-1);
}

int main()
{
    int n;cin>>n;
    vector<int> v(n);
    for(int i=0;i<n;i++) cin>>v[i];
    int res=FindSumOfCubesOfNumbersByRecursion(v,n);
    cout<<res<<'\n';
}

//Contributed by Raghav Garg