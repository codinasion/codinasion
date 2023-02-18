#include <stdio.h>

float edge;

int main(void){
    printf("Enter the square edge:\n");
    scanf("%f", &edge);

    printf("The area of the square is: %f\n", edge*edge);

    return 0;
}
