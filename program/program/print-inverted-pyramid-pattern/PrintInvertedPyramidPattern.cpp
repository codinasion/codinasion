
#include <iostream>

int main()
{
    // Write C++ code here
    int input, i, j, edge;

    std::cout << "input a number : " << std::endl;
    std::cin >> input;

    edge = input;

    for (i = 1; i <= input; i++)
    {
        for (j = 1; j <= edge; j++)
        {
            std::cout << j << " ";
        }

        std::cout << "\n";

        edge = edge - 1;
    }

    return 0;
}