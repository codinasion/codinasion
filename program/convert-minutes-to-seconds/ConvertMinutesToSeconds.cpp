/**
 * NAME: JASMIN, RAMON EMMIEL P.
 * DATE: February 24, 2023
 * COUNTRY: Philippines
 */

#include <iostream>
using namespace std;

int convertMinutesToSeconds(int);

int main(){

    int sampleMinute = 5;

    cout << convertMinutesToSeconds(sampleMinute) << endl;

    return 0;
}

int convertMinutesToSeconds(int minutes){
    return minutes*60;
}