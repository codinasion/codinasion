#include<stdio.h>
#include<string.h>
void reverse(char s[],int start,int end){
if(start>=end)
return ;
char tmp=s[end];
s[end]=s[start];
s[start]=tmp;
start++;
end--;
reverse(s,start,end);
}
 int main(){
    char s[]="im";
    int n=strlen(s);
    reverse(s,0,n);
    for(int i=0;i<=n;i++)
    printf("%c",s[i]);
   
 }
