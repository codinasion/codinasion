#include <stdio.h>  
void conversion(float hours)  
{  
    double minutes, seconds;  
  
    minutes = hours * 60;  
    seconds = hours * 3600;  
      
    printf("There are %lf minutes in %f hours", minutes, hours);  
    printf("\nThere are %lf seconds in %f hours", seconds, hours);  
}  
  
int main()  
{  
    float hours;  
    printf("Enter the value of hours: ");  
    scanf("%f", &hours);  
    conversion(hours);  
    return 0;  
}  
