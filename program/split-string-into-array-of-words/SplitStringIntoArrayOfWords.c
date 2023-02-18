#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    char input[] = "hello world";
    char **words = malloc(sizeof(char*) * strlen(input));
    int word_count = 0;
    char *token = strtok(input, " ");
    while (token != NULL) {
        words[word_count] = malloc(sizeof(char) * (strlen(token) + 1));
        strcpy(words[word_count], token);
        word_count++;
        token = strtok(NULL, " ");
    }
    for (int i = 0; i < word_count; i++) {
        printf("%s\n", words[i]);
        free(words[i]);
    }
    free(words);
    return 0;
}
