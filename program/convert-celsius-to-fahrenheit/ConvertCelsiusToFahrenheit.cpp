#include <iostream>
using namespace std;

int main()
{
    int celsius,fahrenheit;
    cout<<"Input ( C ): ";
    cin>>celsius;
    fahrenheit = (celsius * 9/5) + 32;
    cout<<"Output ( F ): "<<fahrenheit;
    return 1;
}
