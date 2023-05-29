#include <stdio.h>

const int num_one = 0;
const int num_two = 1;

int main() {
    int input;
    printf("Input  : ");
    scanf("%d", &input);
    switch (input) {
        case 1:
            printf("Output : 0");
            break;
        case 2:
            printf("Output : 0 1");
            break;
        default: /* for more than 2 numbers */
            int two_num_ago = num_one;
            int one_num_ago = num_two;
            int next_num = num_one + num_two;

            /* print first two numbers first */
            printf("Output : 0 1 ");

            /* iteration starts from third number */
            for (int i = 0; i < input - 2; i++) {
                printf("%d ", next_num);

                /* finding next number for next iteration */
                two_num_ago = one_num_ago;
                one_num_ago = next_num;
                next_num = one_num_ago + two_num_ago;

            }
    }
    printf("\n");
    return 0;
}
