#include <stdio.h> /* printf, scanf */

/* assuming str includes only valid ascii numbers '0' - '9' */
int Atoi(char *str);

int main()
{
    /* test -- hardcoded and on stack */
    char str[100] = {0};

    scanf("%s",str);

    printf("%d\n",Atoi(str));

    return 0;
}

int Atoi(char *str)
{
    int ret = 0;

    while(*str != '\0')
    {
        ret *= 10;
        ret += *str - '0';

        ++str;
    }

    return ret;
}