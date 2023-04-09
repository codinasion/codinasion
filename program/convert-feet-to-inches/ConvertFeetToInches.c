#include <stdio.h>

int main(void) {
  double feet;  
  double inches; 


  printf("Enter the number of feet: ");
  scanf("%lf", &feet);  

 
  inches = feet * 12; 

 
  printf("%.2lf feet is equal to %.2lf inches.\n", feet, inches);

  return 0;
}