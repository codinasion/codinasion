#include<stdio.h>
#include<math.h>
int main()
{
    printf("Enter the length of the cuboid:");
    int l;
    scanf("%d",&l);
    printf("Enter the height of the cuboid:");
    int h;
    scanf("%d",&h);
    printf("Enter the weight of the cuboid:");
    int w;
    scanf("%d",&w);

    double surface_area=2*((l*w)+(l*h)+(h*w));
    double volume=l*w*h;
    printf("Surface Area of the cuboid = %0.2lf\n",surface_area);
    printf("Volume of the cuboid = %0.2lf",volume);
}
