#include <stdio.h>
#include <string.h>

int main() {
	char str1[20], str2[20], merged[40];
	scanf("%s %s", str1, str2);
	strcpy(merged, str1);
	strcat(merged, str2);

	printf("%s", merged);
	return 0;
}
