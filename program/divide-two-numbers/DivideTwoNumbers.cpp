#include <iostream> // cout, cin


float Divide2Numbers(int x, int y);

int main()
{
    int x = 0;
    int y = 0;

    std::cout << "please enter two numbers to divide:" << std::endl;

    std::cin >> x;
    std::cin >> y;

    std::cout << Divide2Numbers(x,y);
}

float Divide2Numbers(int x, int y)
{
    return ((static_cast<float> (x)) / y);
}
