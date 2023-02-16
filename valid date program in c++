#include <iostream>
void Isvalid(int dd, int mm, int yy)
{
  
    if(yy>=1999 || yy<=2023)
    {
         if (mm>=1 || mm<=12){
             
             if((dd>=1 || dd<=31) && (mm==1 || mm==3 || mm==5 || mm==7 || mm==8 || mm==10 || mm==12))
             std::cout<<"date is valid this month contain 31 days";
             else if((dd>=1 && dd<=30) && (mm==4 || mm==6 || mm==9 || mm==11))
             std::cout<<"Date is valid this month contain 30 days";
             else if((dd>=1 && dd<=28) && (mm==2))
             std::cout<<"Date is valid it's feb";
             else if(dd==29 && mm==2 &&(yy%4==0))
             std::cout<<"Date is valid and it's a leap year";
             else 
             std::cout<<"Date is not valid";
         }
         else {
         std::cout<<"Month is not valid";
         }
    }
else {
    std::cout<<"Year is not valid";
}
}
int main()
{
    int a,b,c;
    std::cout<<"Enter date:";
    std::cin>>a;
    std::cout<<"Enter month";
    std::cin>>b;
    std::cout<<"Enter year";
    std::cin>>c;
    
  Isvalid(a,b,c);
    return 0;
}
