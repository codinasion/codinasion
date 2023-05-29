// This programme coverts inputted days count to weeks...

#include <bits/stdc++.h>
#define ll long long // for typing ease.
using namespace std;

int main(){

    //Taking user input...
    cout<<"Enter the number of days : ";
    ll days;     cin>>days;

    //Converting days to weeks by dividing by 7;
    float weeks = (float)days/7.0;

    // Displaying the output with a maximum digit shown being two, using the setprecision()
    cout<<days<<" day(s) "<<"= "<< setprecision(2) <<weeks <<" week(s)";

    return 0;
    
}

/*
Author : Kartikeya Saini
*/