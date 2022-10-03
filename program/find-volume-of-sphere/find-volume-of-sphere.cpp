#include <iostream>
using namespace std;

int main() {
    int rad;
    float vol;
    cout << "Input the radius of a sphere : " <<endl;
    cin>>rad;
    vol=(4*3.14*rad*rad*rad)/3;
    cout << "The volume of a sphere is : " << vol << endl;
    return 0;
}

Output :-
Input the radius of a sphere : 
The volume of a sphere is : 38772.7