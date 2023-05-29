#include<stdio.h>
int main()
{
    int mile,inch;
    printf("Enter the miles you want to convert:\n");
    scanf("%d",&mile);
    inch=mile*63360;
    printf("%d INCHES\n",inch);
    return 0;
}
