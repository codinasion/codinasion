#include <stdio.h>

int find_gcd(int a,int b){
    int gcd=0;
    for(int i=1;i<=a && i<=b;i++){
        if(a%i==0 && b%i==0) gcd=i;
    }
    return gcd;
}
int main(){
    
    int number1,number2,gcd=0;
    printf("Please enter number1 : ");
    scanf("%d",&number1);
    printf("Please enter number2 : ");
    scanf("%d",&number2);
    gcd=find_gcd(number1,number2);
    printf("%d\n",gcd);
    return 0;
}
