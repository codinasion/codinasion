#include <stdio.h>

int main()
{
    int minutes;
    printf("Enter Minutes   :   ");
    scanf("%i", &minutes);

    int days = minutes / 1440;

    printf("Days    :   %i", days);
    return 0;
}
