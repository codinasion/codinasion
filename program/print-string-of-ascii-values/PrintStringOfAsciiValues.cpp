#include <iostream>
using namespace std;

int main(){
    int n;
    cin>>n;
    int arr[n];
    string ans="";
    for(int i=0;i<n;i++) cin>>arr[i];
    for(int i=0;i<n;i++){
        ans+=(char)(arr[i]);
    }
    cout<<ans<<'\n';
    return 0;
}

//Contributed by Raghav Garg