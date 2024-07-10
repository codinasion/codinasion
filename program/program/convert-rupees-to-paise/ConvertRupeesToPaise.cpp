#include <iostream>
using namespace std;

int main() {
  double rupees, paise;
  cout << "Enter price in rupees: ";
  
  cin >> rupees;

  paise = rupees * 100;  

  cout << rupees << " rupees = " << paise << " paise";    
    
  return 0;
}