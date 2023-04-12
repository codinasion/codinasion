#include<iostream> //cout, cin

//finding the power of a number, assuming that the base and exponent are positive and natural
int PowerOfNumRec(int base,int expo);

int main()
{
    int base = 0;
    int expo = 0;

    std::cout << "please enter base number and than exponent number:" << std::endl;

    std::cin >> base >> expo;

    std::cout << PowerOfNumRec(base,expo) << std::endl;
}


int PowerOfNumRec(int base,int expo)
{
    if(expo == 1)
    {
        return base;
    }

    return base * PowerOfNumRec(base,expo - 1);
}