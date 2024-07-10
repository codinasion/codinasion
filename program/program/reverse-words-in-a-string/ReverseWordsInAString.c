#include <stdio.h>
#include <string.h>

void reverseWords(char *str) {
    int start = 0;
    int end = strlen(str) - 1;

    // Reverse the whole string
    while (start < end) {
        char temp = str[start];
        str[start] = str[end];
        str[end] = temp;
        start++;
        end--;
    }

    // Reverse individual words
    start = 0;
    while (str[start] != '\0') {
        // Skip spaces
        while (str[start] == ' ') {
            start++;
        }

        // Find the end of the current word
        end = start;
        while (str[end] != ' ' && str[end] != '\0') {
            end++;
        }

        // Reverse the current word
        int wordStart = start;
        int wordEnd = end - 1;
        while (wordStart < wordEnd) {
            char temp = str[wordStart];
            str[wordStart] = str[wordEnd];
            str[wordEnd] = temp;
            wordStart++;
            wordEnd--;
        }

        // Move to the next word
        start = end;
    }
}

int main() {
    char input[] = "Hello World";
    
    printf("Input : %s\n", input);

    reverseWords(input);

    printf("Output: %s\n", input);

    return 0;
}
