// Write a C program to convert meters to miles

#include<stdio.h>
#include<math.h>
int main(){
    // Declare variables
    int meter;
    double miles;
    //printf("Enter distance in meters: ");
    scanf("%d", &meter);
    // Convert meter to miles
    miles = meter * 0.00062137119;
    // Using Round off  - nearest integer value
    int result = round(miles);
    //Distance in miles
    printf("%d",result);
    return 0;
}