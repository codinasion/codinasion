#include<stdio.h>
int main()
{
    float len,wid,hit,area;
    printf("Enter the length of cuboid\n");
    scanf("%f",&len);
    printf("Enter the width of cuboid\n");
    scanf("%f",&wid);
    printf("Enter the height of cuboid\n");
    scanf("%f",&hit);
    area=2*((len*wid)+(wid*hit)+(hit*len));
    printf("Area of cuboid:%f\n",area);
    return 0;
}
