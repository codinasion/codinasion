#include<stdio.h>
#include<string.h>
int SIZE = 1000;
int isAnagram(char s1[],char s2[]){
	if(strlen(s1) != strlen(s2)) return 0;
	int mp[26] = {0};
	for(int i = 0;i<strlen(s1);i++){
		mp[s1[i] - 'a']++;
		mp[s2[i] - 'a']--;
	}
	for(int i=0;i<26;i++)
		if(mp[i]!=0) return 0;
			
	return 1;
}
void main() {
	char s1[SIZE],s2[SIZE];
	printf("Enter string1: ");
	scanf("%s",s1);
	
	printf("\nEnter string2: ");
	scanf("%s",s2);
	
	int flag = isAnagram(s1,s2);
	if(flag == 1)
		printf("%s and %s are anagrams\n",s1,s2);
	else
		printf("%s and %s are not anagrams\n",s1,s2);
	
}