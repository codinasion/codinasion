#include <iostream>  
#include <vector>
using namespace std;  
int main()  
{  
    int n, i; 
    vector<int> v;
    cin>>n;    
    for(i=0; n>0; i++)    
    {    
        v.push_back(n%2);    
        n= n/2;  
    }    
    for(i=i-1 ;i>=0 ;i--)    
    {    
        cout<<v[i];    
    }  
    return 0;  
}