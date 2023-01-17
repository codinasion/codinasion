#include <stdio.h>

int main()
{
    int n_r, i,  j, a = 1;
    
    printf("Enter the number of rows of Floyd's triangle to print :\n");
    scanf("%d", &n_r);
    printf("The required Floyd's triangle is: \n");
    for (i = 1; i <= n_r; i++)
    {
        for (j = 1; j <= i; j++)
        {        
            printf("%d ",a);
            a++; 
        }
        printf("\n");
    }
    
    return 0;
}
  