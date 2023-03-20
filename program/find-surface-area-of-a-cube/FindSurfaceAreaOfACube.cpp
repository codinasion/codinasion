#include<iostream>
using namespace std;
int surfaceAreaOfCube(int &side){
	return 6 * side * side;
}
int main(){
	int side=0;
	cout<<"Enter Side of Cube: ";
	cin>>side;
	if(side<=0)
		cout<<"Invalid value (Side of a cube can not be Zero or less than Zero)"<<endl;
	else 
		cout<<"Surface Area : "<<surfaceAreaOfCube(side)<<endl;
}
