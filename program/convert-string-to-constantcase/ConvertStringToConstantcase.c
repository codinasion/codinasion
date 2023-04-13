#include <stdio.h>

int main()
{
    char str[10000] = "hello world";

    for (int i = 0; str[i]; i++)
    {
        if (str[i] > 'a' && str[i] < 'z')
        {
            str[i] = (char)((str[i] - 'a') + 'A');
        }
        if (str[i] == ' ')
        {
            str[i] = '_';
        }
    }

    printf("%s\n", str);
}