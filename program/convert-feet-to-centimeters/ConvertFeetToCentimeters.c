#include <stdio.h> /*printf, scanf*/

float ConvertToCm(int feet);

int main()
{
    int feet = 0;

    if(1 != scanf("%d",&feet))
    {
        return -1;
    }

    printf("%d\n",ConvertToCm(feet));

    return 0;
}


float ConvertToCm(int feet)
{

}