#include <iostream> 
using namespace std;

int main(){

    int years, weekends;

    cout << "Enter number of years : ";
    cin >> years;

    weekends = years * 52 * 2;
    cout << weekends;

    return 0;
}