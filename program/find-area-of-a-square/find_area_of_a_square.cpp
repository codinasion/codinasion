#include<iostrea>
using namespace std;

float findArea(float a){
  float result=a*a;
  return result;
}
  

int main(){
  float side;
  
  //cout<<"Enter the side of square : 
  cin>>side;
  findArea(side);
  return 0;
}
