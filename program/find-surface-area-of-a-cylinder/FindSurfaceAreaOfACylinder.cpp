#define _USE_MATH_DEFINES

#include <iostream>
#include <cmath>

int main()
{

    float height, radius, surfaceAreaOfCylinder;

    std::cout << "enter height of cylinder" << std::endl;
    std::cin >> height;

    std::cout << "enter radius of cylinder" << std::endl;
    std::cin >> radius;

    surfaceAreaOfCylinder = 2 * M_PI * radius * (radius + height);

    std::cout << "surface area of this cylinder is " << surfaceAreaOfCylinder;

    return 0;
}