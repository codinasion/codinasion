#include <iostream>
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;	
typedef unsigned long long ull;
#define pb       push_back 
// #pragma GCC target("avx,avx2,fma")
// #pragma GCC optimization ("unroll-loops, Ofast")
signed main(){
    ios_base::sync_with_stdio(false);
    string s;
    getline(cin, s);
    // cin.getline(s);
    int n;
    n=s.size();
    for(int i=0;i<n;i++){
        if(s[i]>='a' && s[i]<='z')
        s[i]=s[i]+'A'-'a';
    }
    cout<<s<<endl;
    return 0;
}

