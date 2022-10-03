#include<bits/stdc++.h>
using namespace std;


// find max in array fun
int findMax(vector<int>& arr)
{
    int len=arr.size();

    //declearing min possible
    int maxi=INT_MIN;

    for(int i=0;i<len;++i)
    maxi=max(maxi,arr[i]);

    return maxi;
}

int main()
{

   int len;
    
  // taking size as input
   cin>>len;

   vector<int> arr(len);


// array as input
   for(int i=0;i<len;++i)
   cin>>arr[i];

   int ans=findMax(arr);

   cout<<ans<<endl;
   
}
