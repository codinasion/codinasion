#include <stdio.h>

#define BASE 10

int getReverse(int);

int main() {
    int originNum, reverseNum;
    printf("%s", "Input  : ");
    scanf("%d", &originNum);
    reverseNum = getReverse(originNum);
    printf("%s%d%s", "Output : ", reverseNum, "\n");
}

int getReverse(int originNum) {
    int reverseNum = 0;
    int increment;
    while (originNum > 0) {
        increment = originNum % BASE;
        reverseNum += increment;
        reverseNum *= BASE;
        originNum /= BASE;
    }
    reverseNum /= BASE;
    return reverseNum;
}
