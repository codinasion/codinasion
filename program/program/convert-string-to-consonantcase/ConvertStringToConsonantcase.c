#include <stdio.h>
#include <ctype.h>
#include <string.h>

void conVowUpp(char str[]) {
    int N = strlen(str);
    for (int i = 0; i < N; i++) {
        if (str[i] == 'a' || str[i] == 'e' ||
            str[i] == 'i' || str[i] == 'o' ||
            str[i] == 'u') {
            char c = tolower(str[i]);
            str[i] = c;
        } else {
            char c = toupper(str[i]);
            str[i] = c;
        }
    }
    for (int i = 0; i < N; i++) {
        printf("%c", str[i]);
    }
}

int main() {
    printf("Enter a string: ");
    char str[100];
    fgets(str, sizeof(str), stdin);

    // Remove newline character if present
    if (str[strlen(str) - 1] == '\n') {
        str[strlen(str) - 1] = '\0';
    }

    conVowUpp(str);

    return 0;
}
