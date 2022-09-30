#include <stdio.h>
void main()
{
    int l, w, h, volume;
    printf("Enter value of length : ");
    scanf("%d", &l);
    printf("Enter value of width : ");
    scanf("%d", &w);
    printf("Enter value of height : ");
    scanf("%d", &h);
    volume = l * w * h;

    printf("volume of cuboid is : %d", volume);
}