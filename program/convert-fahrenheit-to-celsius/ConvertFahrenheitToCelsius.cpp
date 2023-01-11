#include <iostream>

int main()
{
    // Write C++ code here
    float fahrenheit, celsius;
    std::cout << "enter fahrenhait value : " << std::endl;
    std::cin >> fahrenheit;

    celsius = (fahrenheit - 32) * 5 / 9;

    std::cout << "fahrenheit " << fahrenheit << std::endl;
    std::cout << "celcius :" << celsius;

    return 0;
}