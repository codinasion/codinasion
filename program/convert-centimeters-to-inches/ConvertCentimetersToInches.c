#include <stdio.h> /* printf, scanf */

int ConvertToInches(float cm);

int main()
{
    float cm = 0;

    if(1 != scanf("%f",&cm))
    {
        return -1;
    }

    printf("%d\n",ConvertToInches(cm));

    return 0;
}


int ConvertToInches(float cm)
{
    return (int) (cm / 2.54);
}
