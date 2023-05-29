#include <iostream>
/////////////////////////////////////////////////////////////////////
void ConvertStringToConstantcase(std::string&);
/////////////////////////////////////////////////////////////////////
int main()
{
    std::string input;

    getline(std::cin,input);

    ConvertStringToConstantcase(input);

    std::cout << input << std::endl;

    return 0;
}
/////////////////////////////////////////////////////////////////////
void ConvertStringToConstantcase(std::string& str)
{
    for(size_t i = 0; i < str.size(); ++i)
    {
        if(str[i] == ' ')
        {
            str[i] = '_';
        }

        else if(str[i] >= 'a' && str[i] <= 'z')
        {
            str[i] = str[i] - 32;
        }
    }
}
/////////////////////////////////////////////////////////////////////
