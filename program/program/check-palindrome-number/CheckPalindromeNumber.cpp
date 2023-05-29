

#include <iostream>

using namespace std;

int main()
{
    int n,rev=0;cin>>n;
    for(int i=n;i>0;i=i/10){
        int mod=i%10;
        rev=rev*10+mod;
    }
    // cout<<rev;
    if(rev==n)cout<<"Palindrome Number"<<'\n';
    else cout<<"Not Palindrome Number"<<'\n';
}

//Contributed by Raghav Garg