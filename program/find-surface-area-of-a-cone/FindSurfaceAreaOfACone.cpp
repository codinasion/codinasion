// CPP program to calculate Surface area of Cone

#include<iostream>
using namespace std;

float pi = 3.14159;

// Function to calculate surface area of cone

// Function to calculate
// Surface area of cone
float surface_area(float r, float s)
{
	return pi * r * s + pi * r * r;
}


int main()
{
	float radius,slant_height;
	float vol, sur_area;
cout<<"Enter the radius:";
cin>>radius;
cout<<"Enter the slant_height:";
cin>>slant_height;
	
	// surface area
	cout << "Surface Area Of Cone : "
		<< surface_area(radius, slant_height);
	return 0;
}
