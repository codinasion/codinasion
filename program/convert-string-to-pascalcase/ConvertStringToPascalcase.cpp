#include <string>
#include <cctype>
#include <iostream>

std::string convertToPascalCase(std::string input_str){
    std::string pascalCaseStr;

    size_t pos = 0;
    size_t beg = 0;
    while( pos  != input_str.npos)
    {
        pos = input_str.find(" ", beg);
        std::string word = input_str.substr(beg, pos - beg );
        beg = pos + 1;
        word.front() = static_cast<char>(std::toupper(static_cast<unsigned char>(word.front())));
        pascalCaseStr.append(word);
    }
    return pascalCaseStr;
}


int main()
{
    std::cout << "Hello world and universe --> " << convertToPascalCase("Hello world and universe") << std::endl;
}