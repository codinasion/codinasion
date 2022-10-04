#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

<<<<<<< HEAD
string decimal_to_octal(int n){
=======
string decimaltooctal(int n){
>>>>>>> 1829dbeed4b3afcd80e50776837801f9fcdd1103
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
<<<<<<< HEAD
    cout<<decimal_to_octal(n)<<'\n';
=======
    cout<<decimaltooctal(n)<<'\n';
>>>>>>> 1829dbeed4b3afcd80e50776837801f9fcdd1103
}