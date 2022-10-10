#include<stdio.h>

int stringToInt(char[] );
int main(){
  
    char str[10];
    int intValue;

    printf("Enter any integer as a string: ");
    scanf("%s",str);

   intValue = stringToInt(str);

    printf("Equivalent integer value: %d",intValue);

    return 0;
}

int stringToInt(char str[]){
    int i=0,sum=0;

    while(str[i]!='\0'){
         if(str[i]< 48 || str[i] > 57){
             printf("Unable to convert it into integer.\n");
             return 0;
         }
         else{
             sum = sum*10 + (str[i] - 48);
             i++;
         }

    }

    return sum;

}
