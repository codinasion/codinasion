#include <stdio.h> /* printf, scanf */

float ConvertToInches(float cm);

int main()
{
    float cm = 0;

    if(1 != scanf("%f",&cm))
    {
        return -1;
    }

    printf("%f\n",ConvertToInches(cm));

    return 0;
}


float ConvertToInches(float cm)
{
    return cm / 2.54;
}
