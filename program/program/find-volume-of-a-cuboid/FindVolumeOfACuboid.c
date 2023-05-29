#include <stdio.h>

void main()
{
    int l, w, h, volume;
    printf("Enter value of length : ");
    scanf("%d", &l);
    printf("Enter value of width  : ");
    scanf("%d", &w);
    printf("Enter value of height : ");
    scanf("%d", &h);
    volume = l * w * h;

    printf("\nVolume of cuboid is : %d\n", volume);
}
