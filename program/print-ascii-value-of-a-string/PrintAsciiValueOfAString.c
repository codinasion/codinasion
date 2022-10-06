#include <stdio.h>
#include <stdlib.h>
 
int main(int argc, char *argv[])
{
    char str[100];
    int i=0;
    printf("Input : ");
    scanf("%s",str);
 
    printf("Output : ");
    while(str[i])
         printf("%d ",str[i++]);
        
    return 0;
}
