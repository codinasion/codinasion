#include <stdio.h> /*printf, scanf*/

int IsLowerCase(char character);

int main()
{
    char character = 0;

    int is_good = scanf("%c",&character);
    
    if(is_good != 1)
    {
        return -1;
    }

    if(IsLowerCase(character))
    {
        printf("lower case\n");
    }

    return 0;
}


int IsLowerCase(char character)
{
    if(character <= 'z' && character >= 'a')
    {
        return 1;
    }

    return 0;
}
