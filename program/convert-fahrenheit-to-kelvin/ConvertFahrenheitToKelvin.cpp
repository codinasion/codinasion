#include <iostream>

using namespace std;

double ConvertFahrenheitToKelvin(double fahrenheit)
{
    return (fahrenheit + 459.67) * (5.0 / 9.0);
}

int main()
{
    cout << "1 : " << ConvertFahrenheitToKelvin(1) << endl;
    cout << "0 : " << ConvertFahrenheitToKelvin(0) << endl;
    cout << "1000 : " << ConvertFahrenheitToKelvin(1000) << endl;
    cout << "-50 : " << ConvertFahrenheitToKelvin(-50) << endl;
}