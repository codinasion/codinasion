/*
Logic : 
To convert an octal number to decimal, we can use the following algorithm:

Multiply the first octit by 8^0.
Multiply the second octit by 8^1.
Multiply the third octit by 8^2.
Multiply the fourth octit by 8^3.
Repeat steps 3 and 4 until the last octit.
Add the results of all the multiplications.
The decimal number is the sum of all the multiplications.
*/

                  ------->>>>>>>>>>>------------>>>>>>>>>>>>________CODE________<<<<<<<<<<<<------------<<<<<<<<<<<<<<<<<<<<<<<<<<<

#include <stdio.h>
#include <math.h>
int OctalToDecimal(int num)
{
    int x = 0;
    int ans = 0;

    while (num > 0)
    {

        // obtaining the right-most digit of num
        int y = num % 10;

        // Since the right-most digits were previously scanned in the previous step, divide num by 10 to remove them.
        num /= 10;

        ans += y * pow(8, x);
        ++x;
    }

    return ans;
}
int main()
{
    int num;
    printf("Enter Octal Number: ");
    scanf("%d", &num);
    printf("\n");
    printf("Decimal Number is : %d", OctalToDecimal(num));
    return 0;
}

