#include <stdio.h>

int main() {
    float paise, rupee;
    scanf("%f", &paise);
    rupee = paise / 100;
    printf("%.2f", rupee);
    return 0;
}
