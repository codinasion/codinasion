#include<bits/stdc++.h>

using namespace std;

/*
	Function to check if a given number is prime or not
	
	Checking if all numbers between 2 and sqrt(n) are not a factor of n, 
	If True, then N is prime
	Else, it is composite. 
*/
bool check_prime(int n){
	if(n<2) return 0;
	for(int i=2;i<=sqrt(n);++i){
		if(n%2 == 0) return 0;
	}
	return 1;
}

int main(){
	int n;
	cin>>n;
	
	cout<<((check_prime(n))? "Prime Number" : "Not Prime Number")<<endl;
}