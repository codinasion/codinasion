#include<stdio.h>
#include<stdlib.h>


int main()
{
    long deciNum , octNum = 0, quotient;
    int octalarray[100];
    int i= 0, j;
    
    printf("Enter the number");
    scanf("%ld",&deciNum);

    quotient = deciNum;
    while(quotient)
    {
        octalarray[i++] = quotient%8;
        quotient = quotient/8;
    }

    for(j = i-1 ; j >= 0 ; j--)
    {
        octNum = octNum*10 + octalarray[j];
    }

    printf("%ld" , octNum);
    return 0;
}


