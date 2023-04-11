#include<stdio.h>
#include<string.h>
#include<ctype.h>
char* toSnakecase(char* str) {
	for(int i=0;i<strlen(str);i++) {
		if(str[i]==' ')
			str[i] = '_';
		else
			str[i] = tolower(str[i]);
	}
	return str;
}
void main() {
	char str[1000];
	printf("Enter a string: ");
	fgets(str,1000,stdin);
	printf("String in snakecase: %s\n",toSnakecase(str));
}
