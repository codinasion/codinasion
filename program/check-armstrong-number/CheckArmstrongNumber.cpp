#include <iostream>

bool check_armstrong_number_helper(int number){
    // Max sum of n-digits number <= 9^3*n
    if (number >= 10000) return false;

    int sum = 0;
    int tmp_number = number;
    while(tmp_number != 0){
        int curr_digit = tmp_number % 10;
        sum += curr_digit * curr_digit * curr_digit;
        tmp_number /= 10;
    }
    return (sum == number);
}

void check_armstrong_number(int number){
    if (check_armstrong_number_helper(number)){
        std::cout<<"Armstrong Number"<<std::endl;
    }else{
        std::cout<<"Not Armstrong Number"<<std::endl;
    }
}

int main(){
    check_armstrong_number(153);
    check_armstrong_number(152);
    return 0;
}