#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main()
{
    string s,res="";
    getline(cin,s);
    vector<string> ans;
    for(int i=0;i<s.size();i++){
        if(s[i]==' '){
            ans.push_back(res);
            res="";
        }
        else res+=s[i];
    }
    ans.push_back(res);
    for(auto &it: ans) cout<<it<<'\n';
    return 0;
}