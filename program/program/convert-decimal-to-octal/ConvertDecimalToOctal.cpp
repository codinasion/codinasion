#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

string decimaltooctal(int n){
    string ans="";
    for(int i=n;i>0;i=i/8){
        int mod=i%8;
        ans+=to_string(mod);
    }
    sort(ans.begin(),ans.end());
    return ans;
}


int main(){
    int n;
    cout<<"Enter a number"<<'\n';
    cin>>n;
    cout<<decimaltooctal(n)<<'\n';
}