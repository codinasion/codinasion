#include <stdio.h>

int reverseNum(int n)
{
    static int rev = 0;
    if (n == 0)
        return 0;
    rev = rev * 10 + n % 10;
    reverseNum(n / 10);
    return rev;
}

int main(void)
{
    int n, Rev;
    printf("Enter number: ");
    scanf("%d", &n);
    Rev = reverseNum(n);
    printf("%d", Rev);
    return 0;
}


