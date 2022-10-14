#include<iostream.h>
#include<cstdio.h>
using namespace std;
int main(){
int twenty_four_hrs;
cout<<"Enter the time in twenty four hour format:";
cin>>twenty_four_hrs;
cout<<"\n";
int hrs,min;
hrs=twenty_four_hrs/100;
min=twenty_four_hrs%100;
cout<<"Time in Twelve Hour Format is:\t";
if(hrs==0&&hrs!=12){
    hrs=12; 
    printf("%.2d:%.2d AM\n",hrs,min);
 }
else if(hrs==12&&hrs!=0){
    hrs=12; 
    printf("%.2d:%.2d PM\n",hrs,min);
 }
else if(hrs<12&&hrs!=0){
    hrs=hrs;
    min=min; 
    printf("%.2d:%.2d AM\n",hrs,min);
 }
else if(hrs>12&&hrs!=0)
 { 
    hrs=hrs-12; 
    min=min; 
    printf("%.2d:%.2d PM\n",hrs,min);
 }
}
