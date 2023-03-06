#define _POSIX_C_SOURCE 200809L
#include <stdio.h> /* printf, scanf */
#include <stdlib.h> /* fgets, malloc, free */


void ConvertStringToPathcase(char *str);


int main()
{
    char *str = NULL;
    int is_good = 0;
    size_t size = 0;

    if(scanf("%lu",&size) != 1)
    {
        return -1;
    }
    
    str = (char *)malloc(sizeof(char) * size);

    /* discard \n of scanf so i can give getline new input */
    scanf("%c", (char *) stdin);
    
    is_good = getline(&str,&size,stdin);

    if(is_good == -1)
    {
        free(str);
        return -1;
    }

    ConvertStringToPathcase(str);

    printf("%s\n",str);

    free(str);

    return 0;
}

void ConvertStringToPathcase(char *str)
{

    while(*str != '\0')
    {
        if(*str == ' ')
        {
            *str = '/';
        }

        if(*str >= 'A' && *str <= 'Z')
        {
            *str += 32;
        }

        ++str;
    }
}