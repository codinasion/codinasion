#include <stdio.h>

int var1, var2;

int main(void){

    printf("Enter two numbers: ");
    scanf("%i %i", &var1, &var2);
    
    printf("Before\nNumber1: %d , Number2: %d\n",var1,var2);
    
    var1+=var2;
    var2=var1-var2;
    var1-=var2;
    
    printf("\nAfter\nNumber1: %d , Number2: %d\n",var1,var2);

    return 0;
}
