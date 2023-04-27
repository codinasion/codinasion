#include <stdio.h>
#include <math.h>

int main()
{
    int a, r, n;
    printf("Enter first number of the GP series : ");
    scanf("%d", &a);
    printf("Enter the common ratio of the GP series : ");
    scanf("%d", &r);
    printf("Enter the length of the series : ");
    scanf("%d", &n);

    float power = pow(r, n);
    float ans = (a * (power - 1) / (n - 1));

    printf("The sum of the given GP series is: %f \n", ans);
}