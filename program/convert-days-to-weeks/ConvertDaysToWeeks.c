#include <stdio.h>

int main(){
    int days, weeks, remainder;

    printf("Enter the number of days    :   ");
    scanf("%d", &days);

    weeks = days / 7;
    remainder = days % 7;
    

    if (remainder == 0){
        printf("Weeks   :   %d", weeks);
    }
    else {
         printf("Weeks  :   %d      Days    :   %d", weeks, remainder );
    }
    return 0;
}
