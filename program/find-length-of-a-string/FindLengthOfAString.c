# include <stdio.h>   /*printf */
# include <stdlib.h> /*size_t */

size_t FindLengthOfString(char *string);

int main()
{
	char string[] = "abcd";

	printf("%ld\n",FindLengthOfString(string));

	return 0;
}

size_t FindLengthOfString(char *string)
{
	size_t counter = 0;

	while(*string != '\0')
	{
		++counter;
		++string;
	}

	return counter;
}




