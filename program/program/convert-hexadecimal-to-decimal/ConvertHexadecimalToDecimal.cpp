#include<iostream>
#include<string.h>
using namespace std;
//convert hexadecimal to decimal
int convert(char num[]) {
   int len = strlen(num);
   int base = 1;
   int temp = 0;
   for (int i=len-1; i>=0; i--) {
      if (num[i]>='0' && num[i]<='9') {
         temp += (num[i] - 48)*base;
         base = base * 16;
      }
      else if (num[i]>='A' && num[i]<='F') {
         temp += (num[i] - 55)*base;
         base = base*16;
      }
   }
   return temp;
}
int main() {
   char num[20];
   cout<<"Enter a Headecimal Number"<<endl;
   cin>>num;
   cout<<num<<" after converting to deciaml becomes : "<<convert(num)<<endl;
   return 0;
}