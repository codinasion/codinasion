#include <stdio.h>

int main()
{
    int size, sum = 0;

    printf("Enter the size of an array   :   ");
    scanf("%i", &size);

    int array[size];

    for (int i = 0; i < size; i++){
        printf("Enter elements  %i  :   ", i+1);
        scanf("%i", &array[i]);
        sum += array[i];
    }

    printf("Sum of all numbers in array :   %i", sum);


    return 0;
}
