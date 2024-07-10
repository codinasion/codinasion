#include <iostream>  // cin , cout

int ConvertMetersToMiles(float meters);

int main()
{
    float a = 0;

    std::cout << "please enter a value:" << std::endl;

    std::cin >> a;

    std::cout << ConvertMetersToMiles(a);

    return 0;
}

int ConvertMetersToMiles(float meters)
{
    return meters / 1609;
}
