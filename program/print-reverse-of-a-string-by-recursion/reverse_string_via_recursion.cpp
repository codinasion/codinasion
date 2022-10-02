#include<iostream>
using namespace std;
void reverse(string &s,int start,int end){
if(start>=end)
return ;
swap(s[start],s[end]);
start++;
end--;
reverse(s,start,end);
}
 int main(){
    string s="";
    reverse(s,0,s.length()-1);
    cout<<s;
 }