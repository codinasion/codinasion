// programme to find the smallest element of the inputted matrix
#include <bits/stdc++.h>
#define ll long long
using namespace std;

int main(){

    // Taking the input of count of rows and columns;
    ll a,b;
    cout<<"Enter the number of rows of the matrix :";
    cin>>a;
    cout<<"Enter the number of columns of the matrix :";
    cin>>b;

    // Taking the matrix element inputs;
    ll arr[a][b];
    for(ll i=0;i<a;i++){
        for(ll j=0;j<b;j++){
            cin>>arr[i][j];
        }
    }

    // Finding the smallest element in the matrix;
    ll mini = INT_MAX;
    for(ll i=0;i<a;i++){
        for(ll j=0;j<b;j++){
            if(arr[i][j]<mini){
                mini = arr[i][j];
            }
        }
    }

    
    //Printing the result
    cout<<"The smallest element of the inputted "<<a<<"X"<<b<<" matrix is : "<<mini<<endl;
    return 0;
}