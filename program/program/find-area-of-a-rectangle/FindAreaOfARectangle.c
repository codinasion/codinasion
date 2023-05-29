#include <stdio.h>

int main(){

    int length, width, area;  
    printf("Enter length\n");
    scanf("%d", &length);
    printf("Enter width\n");
    scanf("%d", &width);
    
    area = length * width;
    printf("Area = %d\n", area);
    return 0;
}