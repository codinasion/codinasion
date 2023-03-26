#include<stdio.h>  
  
int main()  
{  
    const float kg = 0.453592;  
    float pounds;  
  
    printf("Enter weight in Pounds : \n");  
    scanf("%f", &pounds);  
  
    printf("Weight in Kilogram is %f\n", (pounds * kg));  
  
    return 0;  
}  
