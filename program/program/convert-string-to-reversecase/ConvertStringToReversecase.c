#include <stdio.h> /* printf */

void ConvertStringToReverseCase(char *str);

int main()
{
    char str[40];
    
    fgets(str, 40, stdin);

    ConvertStringToReverseCase(str);

    printf("%s\n", str);

    return 0;
}

void ConvertStringToReverseCase(char *str)
{
    char *curr = str;

    while(*curr != '\0')
    {
        /* -checks if the curr place of the string is high | low case*/

        /* -add / remove 32( the difference between lower case and high case) to match the new ascii value*/
        if((*curr >= 'A') && (*curr <= 'Z'))
        {
            *curr = *curr + 32;
        }

        else if((*curr >= 'a') && (*curr <= 'z'))
        {
            *curr = *curr - 32;
        }

        ++curr;
    }
}
