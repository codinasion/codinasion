#include <iostream> // cout, cin

void ConvertToKebabcase(std::string &);


int main()
{
    std::string str;

    std::getline(std::cin,str);

    ConvertToKebabcase(str);

    std::cout << str << std::endl;

    return 0;
}

void ConvertToKebabcase(std::string &str)
{
    for(std::size_t i = 0; i < str.size(); ++i)
    {
        if(str[i] == ' ')
        {
            str[i] = '-';
        }

        else if((str[i] >= 'A') && (str[i] <= 'Z'))
        {
            str[i] += 32;
        }
    }
}
