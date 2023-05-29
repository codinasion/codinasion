#include <iostream>

std::string& ConvertStringToSentencecase(std::string& str);

int main()
{
    std::string str;
    std::getline(std::cin,str);

    std::cout << ConvertStringToSentencecase(str) << '\n';

    return 0;
}

std::string& ConvertStringToSentencecase(std::string& str)
{
    char IsNewSentence[3] = {'.','?','!'};
    bool is_new_sentence = true;


    for(size_t i = 0; i < str.size(); ++i)
    {
        // checks if str[i] is the beginning of new sentence && not UpperCase.

        if((str[i] >= 'a') && (str[i] <= 'z') && (is_new_sentence))
        {
            str[i] -= 32;
            is_new_sentence = false;
        }

        // checks if str[i] is not the beginning of new sentence && UpperCase.

        else if((str[i] >= 'A') && (str[i] <= 'Z') && (!is_new_sentence))
        {
            str[i] += 32;
        }

        // checks if str[i] is the beginning of new sentence && UpperCase.
        //if so, need to update the is_new_sentence for the next iteration.

        else if((str[i] >= 'A') && (str[i] <= 'Z') && (is_new_sentence))
        {
            is_new_sentence = false;
        }

        //checks if str[i] is a char before new sentence/end of the string.

        else
        {
            for(size_t j = 0; j < 3; ++j)
            {
                if(IsNewSentence[j] == str[i])
                {
                    is_new_sentence = true;
                }
            }
        }
    }

    return str;
}