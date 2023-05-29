#include <bits/stdc++.h>
using namespace std;

int main(){
    string s;
    getline(cin, s);

    int ind = 0;
    for (int i = 0; i < s.length(); i++){
        if (s[i] == ' '){
            s[i + 1] = toupper(s[i + 1]);
            continue;
        }
        else
            s[ind++] = s[i];
    }

    cout << s.substr(0, ind) << endl;
    return 0;
}
