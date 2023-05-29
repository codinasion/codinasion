#include <iostream>
using namespace std;

int main(){
    int n,maxi=0;
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++) cin>>arr[i];
    for(int i=0;i<n;i++){
        maxi=max(maxi,arr[i]);
    }
    cout<<maxi<<'\n';
    return 0;
}

//Contributed by Raghav Garg