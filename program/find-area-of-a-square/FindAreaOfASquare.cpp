#include<iostream>
using namespace std;


// using long long so that area dont overflow int 

// function to find area
long long int areaOfSquare(long long int side)
{
   long long int area=side*side;
   return area;
}

int main()
{

 

   int side;

   // taking side length as input
   cin>>side;
   

   // calling the Area fun

   long long int ans=areaOfSquare(side);
   cout<<ans<<endl;
   
}
