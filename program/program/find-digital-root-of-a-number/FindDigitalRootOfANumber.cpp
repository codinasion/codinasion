#include<iostream> // cout, sin

//num must be non negative.
int DigitalRoot(int num);

int main()
{
    int find_my_digital_root = 0;

    std::cout << "please enter a number:" << std::endl;
    std::cin >> find_my_digital_root;

    std::cout << "the digital root of the number:" << 
                DigitalRoot(find_my_digital_root) << std::endl;
}

int DigitalRoot(int num)
{
    while(num > 9)
    {
        int tmp = 0;

        while(num)
        {
            tmp += num % 10;
            num /= 10;
        }
        num = tmp;
    }

    return num;
}