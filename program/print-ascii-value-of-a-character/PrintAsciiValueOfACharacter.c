#include <stdio.h>
#include <setjmp.h> // For Exception Handling in C

jmp_buf savebuff;

#define TRY if (setjmp(savebuff) == 0)
#define CATCH else

// Declaring a function with exception handling
int printAscii(char c);

// Main function
int main()
{
    char ch;                         // Declaring Variable
    printf("Enter a character: \n"); // Input prompt
    scanf("%c", &ch);                // Reading input

    TRY
    {
        printf("The ASCII value of given character is %d", printAscii(ch));
    }
    CATCH
    {
        printf("ERROR!!! invalid input.\n");
    }

    return 0;
}

int printAscii(char c)
{
    int ascii = (int)c;
    if (ascii < 0 || ascii > 127)
    {
        longjmp(savebuff, 1);
    }

    return ascii;
}