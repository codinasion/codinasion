#include <stdio.h>
#include <stdbool.h>

bool isPalindrome(int x)
{
    static int rev = 0;
    static int num;
    num = x;
    if (x == 0)
    {
        return (num == rev);
    }
    rev = rev * 10 + x % 10;
    return isPalindrome(x / 10);
}
int main()
{
    int n;
    printf("Enter a number :");
    scanf("%d", &n);
    if (isPalindrome(n))
        printf("is a palindrome");
    else
        printf("is Not a palindrome");
    return 0;
}