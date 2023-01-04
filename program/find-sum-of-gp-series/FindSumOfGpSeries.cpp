//Programme to calculate the sum of Gp series.
// Formula --> (a(r^n - 1))/ (n -1)
#include <bits/stdc++.h>
#define ll long long
using namespace std;
ll solve(){

    return 0;
}
int main(){
    float a,r,n;  
    // here a--> first number of the Gp series.
    // r--> common ratio.
    // n --> the limit of the series.

    //Taking input;
    cout<<"Enter first number of the GP series : ";
    cin>>a;
    cout<<"Enter the common ratio of the GP series : ";
    cin>>r;
    cout<<"Enter the length of the series : ";
    cin>>n;
    
    // Calculations;
    float power = pow(r,n);
    float ans = (a*(power - 1)/(n-1)); 

    //Return ans;
    cout<<"The sum of the given GP series is: " <<ans<<endl;
    return 0;
}

/*
Contributed by : Kartikeya Saini
*/