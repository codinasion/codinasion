//Simple interset program


# include <stdio.h>
# include <conio.h>

int main(){
 
    int principal, rate, time, interest;

    printf("Enter the principal: ");
    scanf("%d", &principal);

    printf("Enter the rate: ");
    scanf("%d", &rate);

    printf("Enter the time: ");
    scanf("%d", &time);

    interest = principal * rate * time / 100;
    printf("Simple interest is %d", interest);

    return 0;
}