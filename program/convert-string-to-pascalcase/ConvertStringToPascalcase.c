#include<stdio.h>
#include<string.h>
#include<ctype.h> 
char* toPascalCase(char *str){
	int flag = 1,index = 0;
	for(int i=0;i<strlen(str);i++) {
		if(str[i]==' '){
			flag = 1;
		}
		else if(flag == 1){
			flag = 0;
			str[index++] = toupper(str[i]);
		}
		else {
			str[index++] = tolower(str[i]);
		}
	}
	str[index] = '\n';
	return str;
}
void main(){
	char str[1000];
	printf("Enter a string: ");
	fgets(str,1000,stdin);
	printf("Input string: %s",str);
	printf("Input string in Pascal Case : %s",toPascalCase(str));
}
