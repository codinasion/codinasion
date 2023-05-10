#include <stdio.h> /* printf, scanf */

int CalcPermutation(int n,int r);

int main()
{
    int n = 0;
    int r = 0;


    printf("please enter 2 numbers n and r:\n");

    scanf("%d %d",&n,&r);

    printf("%d\n",CalcPermutation(n,r));


    return 0;
}

int CalcFactorial(int n)
{
    if(n == 1)
    {
        return n;
    }

    return n * (CalcFactorial(n - 1));
}

int CalcPermutation(int n,int r)
{
    return CalcFactorial(n)/ CalcFactorial(n - r); 
}