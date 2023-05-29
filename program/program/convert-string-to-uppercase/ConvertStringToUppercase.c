#include<stdio.h>
#include<stdbool.h>

bool convertor(char str[]){
    int i=0;
    while(str != NULL && str[i] != '\0'){            // checking for end of string
        if((int)str[i] >= 97 && (int)str[i] <= 122) //making the lower case letters upper case
            str[i] = (str[i] - (97-65));
        i++;
    }
}

int main(){
    char mystring[] = "Hello World.";
    convertor(mystring);
    printf("%s", mystring);
    return 0;
}