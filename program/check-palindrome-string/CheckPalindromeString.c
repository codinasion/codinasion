#include <stdio.h>
#include <string.h>

int main() {
    int i, j;
    char str[20] = "abba";
    
    j = strlen(str) - 1;

    while (i <= j) {
        if (str[i] != str[j]) {
            printf("Not a Palindrome String");
            return 0;
        } else {
            i++;
            j--;
        }
    }
    printf("Palindrome String");
    return 1;
}