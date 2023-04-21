#include <stdio.h>

int main()
{
    char str[10000] = "hello world";

    for (int i = 0; str[i]; i++)
    {
        if (str[i] > 'A' && str[i] < 'Z')
        {
            str[i] = (char)((str[i] - 'A') + 'a');
        }
        if (str[i] == ' ')
        {
            str[i] = '.';
        }
    }

    printf("%s\n", str);
}