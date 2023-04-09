#include math.h
#include stdio.h

#define MAX_ITER 100
#define TOLERANCE 1e-6

void jacobi(double a[][3], int n)
{
    int i, j, k;
    double b[3], c[3], sum, tmp;

    for (k = 0; k < MAX_ITER; k++)
    {
        for (i = 0; i < n; i++)
        {
            for (j = 0; j < n; j++)
            {
                if (i != j)
                {
                    sum = 0.0;
                    for (int l = 0; l < n; l++)
                        if (l != i && l != j)
                            sum += fabs(a[i][l] * a[l][j]);

                    if (fabs(a[i][j]) > TOLERANCE + sum)
                    {
                        tmp = (a[j][j] - a[i][i]) / (2 * a[i][j]);
                        b[i] = tmp + sqrt(1.0 + tmp * tmp);
                        b[j] = tmp - sqrt(1.0 + tmp * tmp);

                        for (int l = 0; l < n; l++)
                        {
                            if (l != i && l != j)
                            {
                                c[l] = a[l][i] / b[i];
                                a[l][j] = a[l][j] / b[j];
                            }
                        }

                        for (int l = 0; l < n; l++)
                        {
                            if (l != i && l != j)
                            {
                                a[i][l] = a[l][i] * b[j];
                                a[l][j] = c[l] * b[i];
                            }
                        }

                        a[i][j] = -a[i][j] * b[i] * b[j];
                    }
                }
            }
        }
    }

    printf("Eigenvalues: ");
    for (i = 0; i < n; i++)
        printf("%.6lf ", a[i][i]);
}

int main()
{
    double a[3][3] = {{2, 1, 1},
                      {1, 2, 1},
                      {1, 1, 2}};
    int n = 3;

    jacobi(a, n);

    return 0;
}
