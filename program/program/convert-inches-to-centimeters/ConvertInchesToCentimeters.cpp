#include<iostream> //cout, cin

float ConvertToCm(int inches);

int main()
{
    int inches = 0;

    std::cin >> inches;

    std::cout << (ConvertToCm(inches));

    return 0;
}

float ConvertToCm(int inches)
{
    return inches * 2.54;
}
