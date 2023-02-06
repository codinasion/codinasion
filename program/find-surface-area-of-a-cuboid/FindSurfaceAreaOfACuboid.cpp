#include <iostream>
using namespace std;

int main() {
    int length, width, height;
    
    cout << "Length: ";
    cin >> length;
    
    cout << "Width: ";
    cin >> width;
    
    cout << "Height: ";
    cin >> height;
    
    cout << "The area of cuboid is: " << 2 * ((length * width) + (width * height) + (height * length));

    return 0;
}

// Author: Tanishq Singh (tanishqsingh.com)
