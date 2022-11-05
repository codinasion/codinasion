#include <iostream>

using namespace std;

int main()
{
    int n;cin>>n;
    int arr[n];
    for(int i=0;i<n;i++)cin>>arr[i];
    int start=0,end=n-1;
    int target,mid=-1;cin>>target;
    while(start<=end){
        mid=(start+end)/2;
        if(arr[mid]==target) break;
        else if(arr[mid]<target) start=mid+1;
        else end=mid-1;
    }
    if(arr[mid]!=target) cout<<"Not Found"<<'\n';
    else cout<<mid<<'\n';
    return 0;
}

//Contributed by Raghav Garg
