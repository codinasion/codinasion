// CPP Program to print 1 to N
// without loops and recursion
#include <iostream>
#define ll long long
using namespace std;

class A {
public:
    static ll a;
    A() { cout << a++ <<" "; }
};
 
ll A::a = 1;
 
// Driver Code
int main()
{
    ll N;  cin>>N;
    A obj[N];
}

/*
Contributed by : Kartikeya Saini
*/