#include<bits/stdc++.h>
#define for(i,o,n,s) for(auto i{o}; i < n; i+=s)
#define input_array(arr,n) for(int index=0; index < n ; index++) cin>>arr[index];
#define int long long
#define FAST ios_base::sync_with_stdio(false); cin.tie(0); cout.tie(0);
using namespace std;
    signed main(){
     FAST
        string s;
        getline(cin,s);
        for(i,0,s.length(),1){
            switch((int)s[i]){
                case 65:
                case 69:
                case 73:
                case 79:
                case 85: s[i]+=32;
                break;
            }
            switch ((int)s[i])
            {
                case 98:
                case 99:
                case 100:
                case 102:
                case 103:
                case 104:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122: s[i]-=32;
                break;
            }
        }
        cout<<s;
        return 0;
    }
