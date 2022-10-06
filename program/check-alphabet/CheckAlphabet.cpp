//Contributed by Raghav Garg
//CheckAlphabet.cpp
#include <iostream>

using namespace std;

int main()
{
    char ch;
    cin>>ch;
    if((ch>='A' && ch<='Z') || (ch>='a' && ch<='z')) cout<<"Alphabet"<<'\n';
    else cout<<"Not Alphabet"<<'\n';
}
