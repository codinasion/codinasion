#include <stdio.h>
#include <stdlib.h>

int main()
{
    int num;
    char word[20];

    printf("Enter a string to convert into Integer  :   ");
    scanf("%s", word);

    num = atoi(word);

    printf("The Integer is  :   %i", num);
    
    return 0;
}
