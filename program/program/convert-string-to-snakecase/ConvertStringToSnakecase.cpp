#include <iostream>
using namespace std;
int main()
{
    string s,ans="";
    getline(cin,s);
    int n=s.size();
    for(int i=0;i<n;i++){
        if(s[i]==' ') ans+="_";
        else ans+=s[i];
    }
    cout<<ans<<'\n';
    return 0;
}
