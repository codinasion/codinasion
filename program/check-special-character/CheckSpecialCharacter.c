#include <stdio.h>

void charCheck(char ch){
	if ( !(((ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122))) && !(ch >= 48 && ch <= 57)  )
        printf("Special Character");
    else 
        printf("Not a Special Character");
}

// Driver Code
int main()
{
    char ch;
    scanf("%c", &ch);
	charCheck(ch);
	return 0;
}
