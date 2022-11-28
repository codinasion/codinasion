#include <iostream>

void sort(int vet[], int n){
	for(int i = 0; i<n; i++){
		for(int j = 0; j<n-i-1; j++){
			if(vet[j] > vet[j+1]){
				int temp = vet[j];
				vet[j] = vet[j+1];
				vet[j+1] = temp;
			}
		}
	}
}

int main(){

    int vet[5] = {1,6,4,3,7};

    std::cout << "Before being sorted" << " - ";
    for(int i = 0; i <= 4; i++){
        std::cout << vet[i] << " ";
    }
    std::cout << std::endl;

    std::cout << "After being sorted" << " - ";
    sort(vet, 5);
    for(int i = 0; i <= 4; i++){
        std::cout << vet[i] << " ";
    }
}