#include <bits/stdc++.h>
#include <iostream>
using namespace std;
#define ll long long int

int main()
{
	int day;
    cout<<"Enter the number of days : ";
    cin>>day;
    
    ll sec = day*24*60*60;
    cout<<"Total Numbers of seconds in "<<day<<" days are "<<sec;
	return 0;
}
