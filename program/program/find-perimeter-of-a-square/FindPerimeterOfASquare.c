#include <stdio.h>
#include <setjmp.h> // For Exception Handling in C

jmp_buf savebuff;

#define TRY if (setjmp(savebuff) == 0)
#define CATCH else

// Declaring a function with exception handling
float calc_peri(float side);

// Main function
int main()
{
    float s;                                                  // Declaring Variable
    printf("Enter the side of square to find perimeter: \n"); // Input prompt
    scanf("%f", &s);                                          // Reading input

    TRY
    {
        printf("Perimeter of square is: %f\n", calc_peri(s));
    }
    CATCH
    {
        printf("ERROR!!! invalid input.\n");
    }

    return 0;
}

float calc_peri(float side)
{
    float peri;
    peri = 4 * side;
    if (side < 0)
    {
        longjmp(savebuff, 1);
    }

    return peri;
}