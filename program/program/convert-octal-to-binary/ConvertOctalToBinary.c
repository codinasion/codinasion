#include <stdio.h>
#include <math.h>

int main()
{
    int i, octal, decimal = 0;
    long binary = 0;
    i = 0;
    
    printf("Enter the Octal Number = ");
    scanf("%d",&octal);

    while(octal != 0)
    {
        decimal = decimal + (octal % 10) * pow(8, i);
        i++;
        octal = octal / 10;
    }
    i = 1;
    while(decimal != 0)
    {
        binary += ((decimal % 2) * i);
        decimal = decimal / 2;
        i = i * 10;
    }

    printf("The Binay Value = %ld\n", binary); 
}
