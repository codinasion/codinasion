#include <iostream>
#include <stdlib.h>


double toK(double tempC){
    return tempC + 273.15;
}

int main(int argc, char *argv[]){
    std::cout << toK(strtod(argv[1], NULL));
}