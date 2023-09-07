#include <iostream>
#include <Eigen/Dense>

using namespace std;
using namespace Eigen;

// Eigen library is used to find the eigen vector of a given matrix.
// Eigen Library was downloaded from: https://gitlab.com/libeigen/eigen/-/archive/3.4.0/eigen-3.4.0.tar.bz2
// Extracted and copied the folder "Eigen" into /usr/local/include using Linux Debian.
// Or use a package manager to install Eigen like "vcpkg" for windows.
// Referene code: https://eigen.tuxfamily.org/dox/classEigen_1_1EigenSolver.html#a66288022802172e3ee059283b26201d7

// Returning the eigenvectors as MatrixXd type
MatrixXd eigenvectors(MatrixXd matrix_egv)
{
    EigenSolver<MatrixXd> eigenSolv(matrix_egv);
    MatrixXd eigen_m = eigenSolv.eigenvectors().real();

    return eigen_m;
}

// eigenvectors help
void eigenvectors_help() 
{
    cout << "Eigenvectors: " << endl;
    cout << "Only sqare Matrixes can be processed." << endl;
    cout << "The equation to solve is: AV = λV." << endl;
    cout << "Where:" << endl;
    cout << "A is the square given matrix." << endl;
    cout << "V is the eigenvectors to calculate and return as MatrixXd type." << endl;
    cout << "λ is the eigenvalues." << endl << endl;
}

// example of use
void eigenvectors_example() 
{
    MatrixXd matrix_egv(3, 3);
    matrix_egv << 1, 2, 3, 4, 5, 6, 7, 8, 9;
    cout << "Eigenvectors example:" << endl;
    cout << "Here is a square matrix m[3x3]:\n" << matrix_egv << endl;
    cout << "Created as follow:" << endl;
    cout << "MatrixXd matrix_egv(3, 3);" << endl;
    cout << "matrix_egv << 1, 2, 3, 4, 5, 6, 7, 8, 9;" << endl;
    cout << "Now, calling the function:" << endl;
    cout << "eigenvectors(matrix_egv)" << endl;
    cout << "The eigenvectors are: " << endl << eigenvectors(matrix_egv) << endl;
    cout << "It will return the eigenvectors as MatrixXd type." << endl;
}

int main ()
{
    eigenvectors_help();
    cout << endl;
    eigenvectors_example();

    return 0;
}