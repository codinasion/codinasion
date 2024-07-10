#include <stdio.h>


int main(void)
{
	int years;
	printf("How many years do you want to convert to weekends?\n");

    //keep asking input until valid
    while (scanf("%d", &years) != 1)
    {
        printf("Enter a valid number!\n");
        //clear input buffer
        while (getchar() != '\n')
        {}
    }
    if (years <= 0)
    {
        printf("Invalid input: must be a positive number!");
        return 1;
    }

	int weekends = years * 104;
	printf("%d weekends are in %d years\n", weekends, years);
	return 0;
}