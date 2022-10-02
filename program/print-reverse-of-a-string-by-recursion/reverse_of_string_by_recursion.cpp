
// using reverse() function

#include<bits/stdc++.h>
using namespace std;
int main()
{
  string str;
  cout<<"Enter the string : ";
  cin>>str;
     
  // Reverse str[begin..end]
  reverse(str.begin(),str.end());
     
  cout << str;
  return 0;
}
