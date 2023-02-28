#include <stdio.h> /* printf, scanf */
#include <stdlib.h> /* fgets, malloc, free */
void ConvertStringToPathcase(char *str);


int main()
{
    char *str = NULL;
    char *tmp = NULL;
    int size = 0;

    if(scanf("%d",&size) != 1)
    {
        return -1;
    }

    str = (char *)malloc(sizeof(char) * size);
    tmp = str;

    tmp = fgets(str,size,stdin);

    if(tmp == NULL)
    {
        free(str);
        return -1;
    }

    ConvertStringToPathcase(str);

    printf("%s\n",str);
}

void ConvertStringToPathcase(char *str)
{
    
}