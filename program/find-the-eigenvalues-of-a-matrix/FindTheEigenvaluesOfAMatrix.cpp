#include <armadillo>
#include <iostream>

using namespace std;
using namespace arma;

void findTheEigenValuesOfAMatrix(arma::mat& X)
{
    cx_vec eigval;

    eig_gen(eigval, X);

    cout << "Found following eigenvalues \n";
    cout << eigval << endl;
}

int main()
{
    mat X = {{1,2,3},{4,5,6},{7,8,9}};
    findTheEigenValuesOfAMatrix(X);
}