
//PrintFibonacciSeriesByRecursion.cpp
#include <iostream>

using namespace std;

void PrintFibonacciSeriesByRecursion(int n,int a,int b){
    int c;
    if(n>=1){
        c=a+b;
        a=b;
        b=c;
        cout<<c<<" ";
        PrintFibonacciSeriesByRecursion(n-1,a,b);
    }
}

int main()
{
    int n;cin>>n;
    cout<<0<<" "<<1<<" ";
    PrintFibonacciSeriesByRecursion(n-2,0,1);
}

//Contributed by Raghav Garg