#include <stdio.h>

int FindSquare(int num);

int main()
{
	int num = 0;
	
	int is_good = scanf("%d", &num);
	if (is_good != 1)
	{
		return -1;
	}
	
	printf("%d",FindSquare(num));

    return 0;
}

int FindSquare(int num)
{
	return num* num;
}