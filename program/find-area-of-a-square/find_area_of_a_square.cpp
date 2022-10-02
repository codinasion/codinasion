#include<iostrea>
using namespace std;

float findArea(float a){
  float result=a*a;
  return result;
}
  

int main(){
  float side, area;
  
  cout<<"Enter the side of square : ";
  cin>>side;
  area=findArea(side);
  cout<<"Area of square : "<<area<<endl;
  return 0;
}
