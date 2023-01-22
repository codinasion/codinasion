#include <stdio.h>
#include <string.h>

int main(){
		char str1[20], str2[20];
		scanf("%s %s", str1, str2);
		char merged[40];
		strcpy(merged, str1);
		strcat(merged, str2);
		printf("%s", merged);
		return 0;
}
		
