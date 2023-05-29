#include <stdio.h>

int main() {
    double rupees, paise;
    printf("Enter price in rupees: ");
    scanf("%lf", &rupees);  
 
    paise = rupees * 100;

    printf("%.2lf rupees = %.2lf paise", rupees,paise);
    
    return 0;
}