#include<bits/stdc++.h>
using namespace std;

#define Pi 3.14

double findAreaOfCircle(double radius)
{
    double ans=0;

    ans=Pi*radius*radius;

    return ans;
}

int main()
{

    double radius;

    cin>>radius;

    cout<<findAreaOfCircle(radius)<<endl;
}
