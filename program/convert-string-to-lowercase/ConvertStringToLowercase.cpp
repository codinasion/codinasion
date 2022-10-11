#include <iostream>

using namespace std;

int main()
{
    string s;
    getline(cin,s);
    for(int i=0;i<s.size();i++) s[i]=tolower(s[i]);
    cout<<s<<'\n';
    return 0;
}
