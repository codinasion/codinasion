#include <iostream>
#include <string>

void SWAP(char& x, char& y){
	char t = x;
	x = y;
	y = t;
}

void PrintReverseOfAString(std::string s){
	int n = s.length();
	for(int i=0, j=n-1; i<j; i++, j--){
		SWAP(s[i], s[j]);
	}
	std::cout<<s<<std::endl;
}

int main(){
	std::string s;
	std::cin>>s;
	PrintReverseOfAString(s);
	return 0;
}
