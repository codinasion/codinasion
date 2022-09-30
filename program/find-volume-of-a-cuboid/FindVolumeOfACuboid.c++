#include <iostream>
using namespace std;
int main()
{
    int l, w, h, volume;
    cout << "Enter value of length : ";
    cin >> l;
    cout << "Enter value of width : ";
    cin >> w;
    cout << "Enter value of height : ";
    cin >> h;
    volume = l * w * h;

    cout << "volume of cuboid is : " << volume;
    return 0;
}