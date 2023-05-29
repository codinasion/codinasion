#include <stdio.h> /* printf, scanf */

/* divides number1 with number2 */
float DivideTwoNumbers(int num1, int num2);

int main()
{
    int num1 = 0;
    int num2 = 0;
    printf("please enter two numbers to divide\n");

    if(scanf("%d%d",&num1,&num2) != 2)
    {
        return -1;
    }

    printf("%.2f\n",DivideTwoNumbers(num1,num2));

    return 0;
}

float DivideTwoNumbers(int num1, int num2)
{
    return (((float)num1 / num2));
}