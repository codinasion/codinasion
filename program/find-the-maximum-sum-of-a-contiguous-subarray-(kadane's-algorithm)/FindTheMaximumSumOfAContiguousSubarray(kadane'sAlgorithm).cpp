#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n;cin>>n;
    vector<int> v(n);
    for(int i=0;i<n;i++) cin>>v[i];
    int sum=0,maxi_sum=0;
    for(int i=0;i<n;i++){
        sum+=v[i];
        maxi_sum=max(maxi_sum,sum);
        if(sum<0) sum=0;
    }
    cout<<maxi_sum<<'\n';
    return 0;
}

//Contributed by Raghav Garg
