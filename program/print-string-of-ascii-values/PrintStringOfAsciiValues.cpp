//Program to print the character of given ASCII value
#include<iostream>
using namespace std;

int main ()
{ char temp;
  int num[100], len;
  cout<<"enter number of characters in your string:";
  cin>>len;
  
  cout<<"Enter ASCII values of your string :";
  for(int i=0;i<len;i++)
  {
  cin>>num[i];
  }
  
  
  cout<<"Your String:";
  for(int i=0;i<len;i++)
  { temp = num[i];
  cout<<temp;
  }
  return 0;
}
