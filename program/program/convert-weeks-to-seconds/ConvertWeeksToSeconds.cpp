/**
 * @file ConvertWeeksToSeconds.cpp
 * @author Jasmin, Ramon Emmiel P. (ramonjasmin8@gmail.com)
 * @brief 
 * @version 0.1
 * @date 2023-02-28
 * @copyright Copyright (c) 2023
 */

#include <iostream>
using namespace std;

int convertWeeksToSeconds(int);

int main(){
    int sampleInput = 5;
    int sampleOutput = convertWeeksToSeconds(sampleInput);

    cout << "INPUT: " << sampleInput << endl;
    cout << "OUTPUT: " << sampleOutput << endl;
}

int convertWeeksToSeconds(int weeks){
    return (weeks * 604800);
}