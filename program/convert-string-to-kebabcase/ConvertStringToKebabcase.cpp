#include <iostream> // cout, cin

void ConvertToKebabcase(std::string &);


int main()
{
    std::string str;

    std::cin >> str;

    ConvertToKebabcase(str);

    std::cout << str << std::endl;

    return 0;
}