#include <bits/stdc++.h>
using namespace std;

void swap(int x, int y){
    int temp = x;
    x = y;
    y = temp;
}

int main() {
    int a, b;
    cout<<"Enter first number:"<<endl;
    cin>>a;
    cout<<"Enter second number:"<<endl;
    cin>>b;
    swap(a,b);
    cout<<"After swapping: "<<a<<" "<<b;
    return 0;
}