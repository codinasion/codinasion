
#include<stdio.h>


float convertCtoF(float c)
{
    float f = 1.8*c + 32;
    return f;


}

int main()
{
    float celsius , fahrenheit;
    printf("Enter the temperature");
    scanf("%f", &celsius);
    
    fahrenheit = convertCtoF(celsius);
    printf("Fahrenheit value is %.2f" , fahrenheit);


}