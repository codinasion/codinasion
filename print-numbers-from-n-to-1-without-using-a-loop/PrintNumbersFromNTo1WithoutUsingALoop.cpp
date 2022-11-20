// Write a program, that prints numbers from n to 1 without using a loop
#include <iostream>

// Instead of using a loop, this function just prints the current number and
// calls itself again with the number - 1(Recursion).
void PrintNum(int);

int main()
{
    PrintNum(5);
    return 0;
}

void PrintNum(int n)
{
    // base case
    if (n > 0)
    {
        std::cout << n << " ";
        PrintNum(n - 1);
    }
    else
        std::cout << std::endl;

    return;
}
