#include <iostream>

using namespace std;

int main() {
  int m[3][3];

  cout << "Enter the elements of the matrix:" << endl;

  for(int i = 0; i < 3; i++) {
    for(int j = 0; j < 3; j++) {
      cin >> m[i][j];
    }
  }

  // intialize determinant
  float d = 0;

  //finding determinant of the matrix
  for(int i = 0; i < 3; i++) {
    d = d + (m[0][i] * (m[1][(i+1)%3] * m[2][(i+2)%3] - m[1][(i+2)%3] * m[2][(i+1)%3]));
  }
  
  if(d > 0) {
    cout << "Inverse of this matrix is:" << endl;

    for(int i = 0; i < 3; i++) {
      for(int j = 0; j < 3; j++) {
        cout << ((m[(j+1)%3][(i+1)%3] * m[(j+2)%3][(i+2)%3]) - (m[(j+1)%3][(i+2)%3] * m[(j+2)%3][(i+1)%3]))/ d <<"\t"; //finding adjoint and dividing it by determinant
      }
      cout << endl;
    }
  } else {
    cout << "Inverse does not exist for this matrix" << endl;
  }

  return 0;

}