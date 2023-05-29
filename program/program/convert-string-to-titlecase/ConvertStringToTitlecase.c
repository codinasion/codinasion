#define _POSIX_C_SOURCE 200809L /* for getline*/

#include <stdio.h> /* printf */
#include <stdlib.h> /* size_t, free */
#include <string.h> /* strlen */

void ConvertToTitleCase(char *str);


int main()
{
    size_t size = 100;
    char *str = NULL;

    getline(&str,&size,stdin);

    ConvertToTitleCase(str);

    printf("%s\n",str);

    free(str);

    return 0;
}



void ConvertToTitleCase(char *str)
{
    int len = strlen(str);
    int i = 0;
    int is_space = 0;

    if((str[i] >= 'a') && str[i] <= 'z')
    {
        str[i] -= 32;
    }

    for(i = 0; i < len; ++i)
    {
        if(str[i] == ' ')
        {
            is_space = 1;
        }

        else if(((str[i] >= 'a') && str[i] <= 'z')&& is_space)
        {
            str[i] -= 32;
            is_space = 0;
        }
    }
}
