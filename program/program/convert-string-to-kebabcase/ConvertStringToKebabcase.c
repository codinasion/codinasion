#include<stdio.h>
#include<string.h>
char* toKababCase(char *str) {
	int flag = 0,index = 0;
	char c[1000];
	for(int i=0;i<strlen(str);i++){
		if(str[i] ==' '){
			flag = 1;
		}
		else{
			if(flag==1 && str[i] != '\0') {
				flag = 0;
				str[index++] = '-';	
			}
			str[index++] = tolower(str[i]);
		}
	}
	str[index] = '\0';
	return str;
}
void main() {
	char str[1000];
	printf("Enter a string: ");
	fgets(str,1000,stdin);
	printf("String in Kababase: %s",toKababCase(str));
}
