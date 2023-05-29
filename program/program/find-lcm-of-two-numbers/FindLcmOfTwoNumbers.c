#include <stdio.h>

int find_gcd(int a,int b){
    int gcd=0;
    for(int i=1;i<=a && i<=b;i++){
        if(a%i==0 && b%i==0) gcd=i;
    }
    return gcd;
}
int main(){
    
    int a,b,gcd=0;
    scanf("%d %d",&a,&b);
    gcd=find_gcd(a,b);
    int res=(a*b)/gcd;
    printf("%d",res);
    return 0;
}

//Contributed by Raghav Garg