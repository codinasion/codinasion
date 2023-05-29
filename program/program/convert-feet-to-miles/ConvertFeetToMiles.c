#include <stdio.h>

int main()
{
    int feet;
    scanf("%d", &feet);
    int miles = feet / 5280;
    printf("%d", miles);
    // float miles = feet / 5280.0;
    // printf("%f", miles);
    return 0;
}