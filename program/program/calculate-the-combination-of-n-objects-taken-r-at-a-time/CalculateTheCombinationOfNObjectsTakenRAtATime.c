#include<stdio.h>

int factorial(int n)
{
    if(n==0)
        return 1;
    else
        return n*factorial(n-1);
}

int main()
{
    int n = 5;
    int r = 2;
    int nCr=factorial(n)/(factorial(r)*factorial(n-r));
    printf("%d",nCr);
    return 0;
}