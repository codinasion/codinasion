#include<stdio.h>
#include<math.h>
int main() {

    int d=0,i=0,o;
    scanf("%d",&o);
    while(o != 0) {
        d += (o%10) * pow(8,i);
        i++;
        o/=10;
    }
    printf("%d",d);
}
