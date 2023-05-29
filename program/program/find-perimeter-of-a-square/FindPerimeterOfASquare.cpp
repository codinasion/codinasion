// C++ Program to Find Perimeter of a Square
#include <iostream>
using namespace std;

int main(){
    int side, pm;
    
    // Taking input
    cout << "Enter the side of the square   : ";
    cin >> side;
    
    // Calculating perimeter of square
    pm = 4 * side;
    
    // Display perimeter
    cout << "The perimeter of the square is : " << pm << endl;
    
    return 0;
}
