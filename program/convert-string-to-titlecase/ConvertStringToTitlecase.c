#include <stdio.h> /* printf, scanf */
#include <string.h> /* strlen */
void ConvertToTitleCase(char *str);


int main()
{
    char str[100] = {0};

    if(scanf("%s",str) != 1)
    {
        return -1;
    }

    ConvertToTitleCase(str);

    printf("%s\n",str);
}



void ConvertToTitleCase(char *str)
{
    int len = strlen(str);
    int i = 0;
    int is_space = 0;

    if((str[i] >= 'a') && str[i] <= 'z')
    {
        str[i] += 32;
    }

    for(i = 0; i < len; ++i)
    {
        if(str[i] == ' ')
        {
            is_space = 1;
        }

        else if(((str[i] >= 'a') && str[i] <= 'z')&& is_space)
        {
            str[i] += 32;
        }
    }
}
