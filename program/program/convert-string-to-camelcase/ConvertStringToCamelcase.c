#include <stdio.h>
#include <stdlib.h>
int main()
{
    char str[100],camelcase[100];
    int flag=0,i=0,j=0;
    printf("Enter a sentence\n");
    gets(str);
    printf("Original String = %s\n",str);
    while(str[i]!='\0')
    {
        if(str[i]==' ')
        {
           i++;
           flag=1;
           continue;
        }
        if(flag==1)
        {
            camelcase[j]=str[i]-32;
            flag=0;
        }
        else
        {
            camelcase[j]=str[i];
        }
        j++;
        i++;
    }
    printf("Camel Case = %s",camelcase);
    return 0;
}
