# include <stdio.h>


void FindLengthOfString(char *string)
{
	printf("%d\n", sizeof(string));
}

void main()
{
	char string[] = "abcd";
	FindLengthOfString(string);
}




