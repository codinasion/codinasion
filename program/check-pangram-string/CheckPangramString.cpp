
Marking files as viewed can help keep track of your progress, but will not affect your submitted review
Viewed
@@ -0,0 +1,36 @@
#include <iostream>

bool IsPangram(std::string str);

int main()
{
    std::string str;
    getline(std::cin,str);

    std::cout << IsPangram(str) << std::endl;

    return 0;
}

bool IsPangram(std::string str)
{
    int arr[26] = {0};

    for(size_t i = 0; i < str.size(); ++i)
    {
        if((tolower(str[i]) >= 'a') && (tolower(str[i]) <= 'z'))
        {   
            ++arr[tolower(str[i]) - 'a'];
        }
    }

    for(size_t i = 0; i < 26; ++i)
    {
        if(!arr[i])
        {
            return false;
        }
    }

    return true;
}