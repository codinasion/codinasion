/* C program to calculate the surface area of a cone. */

#include <stdio.h>  

#define pi 3.141592653589793   

float find_SurfaceArea_of_cone(float r, float s) // It is a function to find surface area   

{   

float SurfaceArea_of_cone;  

SurfaceArea_of_cone= pi * r * s + pi * r * r ; // It is a formula for calculating a surface area of cone   

return (SurfaceArea_of_cone);   

}   

float main()   

{   

float r,s ;   

printf("Enter the radius of the cone:");   

scanf("%f",&r);  

printf("Enter the slant height of the cone:");   

scanf("%f",&s);  

  

printf("Surface Area of the cone is: %.2f", find_SurfaceArea_of_cone(r,s));     

return 0;   

}  
