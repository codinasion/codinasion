#include <stdio.h> /*printf, scanf*/

double ConvertToCm(double feet);

int main()
{
    double feet = 0;

    if(1 != scanf("%lf",&feet))
    {
        return -1;
    }

    printf("%.1f\n",ConvertToCm(feet));

    return 0;
}


double ConvertToCm(double feet)
{
    return feet * 30.48;
}