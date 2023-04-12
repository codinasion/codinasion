#include<iostream>
using namespace std;
int reverse(int n) {
	int reverseNumber = 0;
	while(n) {
		reverseNumber = reverseNumber * 10 + (n%10);
		n/=10;
	}
	return reverseNumber;
}
int main(){
	int n;
	cout<<"Enter a number :";
	cin>>n;
	cout<<"Number in reverse : "<<reverse(n)<<endl;
}

