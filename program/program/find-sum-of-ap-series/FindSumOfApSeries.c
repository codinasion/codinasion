#include <stdio.h>

int main()
{
    int a, n, d;
    int sum = 0;

    printf("Enter the first term in AP series   :   ");
    scanf("%i", &a);
    printf("Enter number of terms   :   ");
    scanf("%i", &n);
    printf("Enter common difference :   ");
    scanf("%i", &d);


    for (int i = 0; i < n; i++){
        sum += a + i * d;
    }


    printf("Sum of AP series is :   %i", sum);
    
    return 0;
}
