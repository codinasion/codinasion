#include<stdio.h>

// Basic Function for calculating a^b
int power(int a, int b){
  int val = 1;

  for(int i=0;i<b;i++){
    val *= a;
  }
  return val;
}

int convert_bin_to_decimal(char* str, int len){
  int num = 0;

  for(int i=0;i<len; i++){
    num += power(2, i)*(str[i] - '0'); // Add 2^i if str[i] is 1
  }
  
  return num;
}

int main(){
  int len = 5;
  char* str = "00101";// First bit is of index 0, ex "00101" = 20

  //Function Call
  int num = convert_bin_to_decimal(str,len);
  printf("%d\n", num);
  return 0;
}
