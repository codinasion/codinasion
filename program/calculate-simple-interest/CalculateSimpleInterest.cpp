#include <iostream>
using namespace std;

int main(){
    float p, r, t, si;
    cout << "Enter the principal amount: ";
    cin >> p;
    cout << "Enter the rate of interest: ";
    cin >> r;
    cout << "Enter the time period: ";
    cin >> t;
    si = (p * r * t) / 100;
    cout << "Simple interest is: " << si;
    return 0;
}