#define _POSIX_C_SOURCE 200809L /* for getline*/

#include <stdio.h> /* printf */
#include <stdlib.h> /* size_t, free */
#include <string.h> /* strlen */
#include <unistd.h> /* getline */

void PrintReverseOfAString(char *);


int main()
{
    size_t size = 100;

    char *str = NULL;

    getline(&str,&size,stdin);

    PrintReverseOfAString(str);

    free(str);

    return 0;
}

void PrintReverseOfAString(char *str)
{
    int size = strlen(str);
    int i = 0;

    for(i = size;i >= 0; --i)
    {
        printf("%c",str[i]);
    }
}