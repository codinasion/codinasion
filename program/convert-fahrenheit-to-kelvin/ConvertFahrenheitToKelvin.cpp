#include <iostream>

using namespace std;

double ConvertFahrenheitToKelvin(double fahrenheit)
{
    return (fahrenheit + 459.67) * (5.0 / 9.0);
}

int main()
{
    string input;
    cout << "enter a number to convert from ('exit' to exit): ";
    getline(cin, input);
    while (input != "exit")
    {
        double fern = stod(input);
        cout << ConvertFahrenheitToKelvin(fern) << endl;
        getline(cin, input);
    }
    return 0;
}