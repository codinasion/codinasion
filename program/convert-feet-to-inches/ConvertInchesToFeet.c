#include <stdio.h>
int main() {
   float inch,feet;                               //declating a variable
   printf("Enter value in inches = ");
   scanf("%f",&inch);                             //storring value in a variable
   feet = inch / 12;                             // formula for converting inch into feet
   printf("\nyou get in feet  = %.2f ",feet);
}