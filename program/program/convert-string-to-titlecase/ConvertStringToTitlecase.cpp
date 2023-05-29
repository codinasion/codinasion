#include <iostream>
using namespace std;
int main()
{
    string s;
    getline(cin,s);
    int n=s.size();
    s[0]=toupper(s[0]);
    for(int i=0;i<n;i++){
        if(s[i-1]==' ') s[i]=toupper(s[i]);
    }
    cout<<s<<'\n';
    return 0;
}
