#include <stdio.h> /*printf, scanf */
#include <string.h> /* strlen */
#include <ctype.h> /* tolower */

int isPangram(char *str);

int main()
{
    /* assuming string won't be greater then 100 chars */
    char str[100] = {0};

    fgets(str,100,stdin);

    if(isPangram(str))
    {
        printf("Pangram sentence\n");
    }

    else
    {
        printf("Not a pangram\n");
    }

    return 0;
}

int isPangram(char *str)
{
    char abc[26] = {0};
    size_t i = 0;
    int idx = 0;

    for(i = 0; i < strlen(str); ++i)
    {
        idx = tolower(str[i]) - 'a';
        
        if(idx >= 0 && idx <= 25)
        {
            ++abc[idx];
        }
    }

    for(i = 0; i < 26; ++i)
    {
        if(abc[i] == 0)
        {
            /* false */
            return 0;
        }
    }

    /* true */
    return 1;
}