#include <iostream>
using namespace std;


string compute(int num){
    string words[] = {"", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fiveteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"};
    string tens[] = {"", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"};
    if (num<20){
        return words[num];
    } else {
        return tens[num/10] + " " + words[num%10];
    }
}

int main(){
    
    //Variables Declaring & Initializing
    string face_value[] = {"Crore", "Lakh", "Thousand", "Hundred"};
    int divisor_array[] = {10000000, 100000, 1000, 100, 1};
    int num, divisor;

    //Input from User
    cout << "Enter number : ";
    cin >> num;

    //Checking whether zero
    if(num==0) cout << "Zero";

    //Converting and Printing to Words
    for(int i=0; i<=4; i++){
        divisor = divisor_array[i];
        if (num/divisor!=0) cout << compute(num/divisor) << " " << face_value[i] << " ";
        num = num%divisor; 
    }

    return 0;

}