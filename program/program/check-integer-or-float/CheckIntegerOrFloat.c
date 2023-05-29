#include <stdio.h>

int main() {

    char number[100];

    int flag = 0;

    printf("Enter the number to check integer or float: ");

    scanf("%s", number);

    //loop through each character of input

    for (int i = 0; number[i] != 0; i++) {

    //if decimal "." is found, it means it is float

        if (number[i] == '.') {

            flag = 1;

            break;

        }

    }

    if (flag)

    {

       printf("\n%s is a floating-point number.\n", number);

    }

    else{

       printf("\n%s is an integer number.\n", number);

    }

    return 0;

}
