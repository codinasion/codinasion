#include <stdio.h>

int main()
{
    char str[10000] = "hello world";
    int cap = 0;
    for (int i = 0; str[i]; i++)
    {
        if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) // if it is alphabet
        {
            if (cap == 0) // this need to be lowercase
            {
                if (str[i] >= 'A' && str[i] <= 'Z')
                {
                    str[i] = (char)((str[i] - 'A') + 'a'); // convert uppercase to lowercase
                }
                cap = 1;
            }
            else
            { // this need to be uppercase
                if (str[i] >= 'a' && str[i] <= 'z')
                {
                    str[i] = (char)((str[i] - 'a') + 'A'); // convert lowercase to uppercase
                }
                cap = 0;
            }
        }
    }
    printf("%s\n", str);
}