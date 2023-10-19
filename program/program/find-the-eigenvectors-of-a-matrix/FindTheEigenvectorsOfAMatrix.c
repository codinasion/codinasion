#include <stdio.h>
#include <gsl/gsl_eigen.h>

int main() {
    gsl_matrix *mat = gsl_matrix_alloc(3, 3); // Create a 3x3 matrix
    gsl_matrix_set(mat, 0, 0, 1);
    gsl_matrix_set(mat, 0, 1, 2);
    gsl_matrix_set(mat, 0, 2, 3);
    gsl_matrix_set(mat, 1, 0, 4);
    gsl_matrix_set(mat, 1, 1, 5);
    gsl_matrix_set(mat, 1, 2, 6);
    gsl_matrix_set(mat, 2, 0, 7);
    gsl_matrix_set(mat, 2, 1, 8);
    gsl_matrix_set(mat, 2, 2, 9);

    gsl_vector_complex *eval = gsl_vector_complex_alloc(3); // Eigenvalues
    gsl_matrix_complex *evec = gsl_matrix_complex_alloc(3, 3); // Eigenvectors

    gsl_eigen_nonsymmv_workspace *workspace = gsl_eigen_nonsymmv_alloc(3);
    gsl_eigen_nonsymmv(mat, eval, evec, workspace);

    gsl_eigen_nonsymmv_free(workspace);

    gsl_eigen_nonsymmv_sort(eval, evec, GSL_EIGEN_SORT_ABS_DESC);

    printf("Eigenvectors:\n");
    for (int i = 0; i < 3; i++) {
        printf("[");
        for (int j = 0; j < 3; j++) {
            gsl_complex z = gsl_matrix_complex_get(evec, j, i);
            printf("%f, ", GSL_REAL(z));
        }
        printf("]\n");
    }

    gsl_matrix_free(mat);
    gsl_vector_complex_free(eval);
    gsl_matrix_complex_free(evec);

    return 0;
}
