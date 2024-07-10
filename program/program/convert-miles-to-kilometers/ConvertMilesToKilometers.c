#include <stdio.h>

int convertMiles(float miles){
    float output = miles * 1.609;
    printf("Output  : %.5lf", output);
}

int main() {
    printf(" C program to convert miles to kilometers \n1 mile = 1.609 kilometers \n");
    float input = 5.0;
    printf("Input  : %.2f \n", input);
    convertMiles(input);
    return 0;
}