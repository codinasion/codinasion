#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main()
{
    char input[100], output[100] = "";
    int i;
    printf("Enter a string: ");
    gets(input);
    for(i = 0; input[i] != '\0'; i++)
    {
        if(input[i] == 'a' || input[i] == 'e' || input[i] == 'i' || input[i] == 'o' || input[i] == 'u' ||
           input[i] == 'A' || input[i] == 'E' || input[i] == 'I' || input[i] == 'O' || input[i] == 'U')
        {
            output[i] = tolower(input[i]);
        }
        else if(isalpha(input[i]))
        {
            output[i] = toupper(input[i]);
        }
        else
        {
            output[i] = input[i];
        }
    }
    output[i] = '\0';
    printf("Output: %s\n", output);
    return 0;
}