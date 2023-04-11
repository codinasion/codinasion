#define _POSIX_C_SOURCE 200809L

#include <stdio.h>    /* printf, getline */
#include <stdlib.h>  /* free       */
#include <string.h> /* strlen */

const char *ConvertStringToSentenceCase(char *);

int main()
{
    size_t size = 100;
    char *str = NULL;

    /* user need to free the ptr given, will be malloced in case it's points to NULL */
    getline(&str,&size,stdin);

    printf("%s \n",ConvertStringToSentenceCase(str));

    free(str);

    return 0;
}

const char *ConvertStringToSentenceCase(char *str)
{
    char IsNewSentence[3] = {'.','?','!'};
    int is_new_sentence = 1;

    size_t i = 0;
    size_t j = 0;

    for(i = 0; i < strlen(str); ++i)
    {
        if((str[i] >= 'a') && (str[i] <= 'z') && (is_new_sentence))
        {
            str[i] -= 32;
            is_new_sentence = 0;
        }

        else if((str[i] >= 'A') && (str[i] <= 'Z') && (!is_new_sentence))
        {
            str[i] += 32;
        }

        else if((str[i] >= 'A') && (str[i] <= 'Z') && (is_new_sentence))
        {
            is_new_sentence = 1;
        }

        else
        {
            for(j = 0; j < 3; ++j)
            {
                if(IsNewSentence[j] == str[i])
                {
                    is_new_sentence = 1;
                }
            }
        }
    }

    return str;
}
