using System;
class Matrix {
      
    static  int R = 3;
    static  int C = 3;

    static void swap(int [,]mat,int row1, int row2, int col)
    {
        for (int i = 0; i < col; i++)
        {
            int temp = mat[row1,i];
            mat[row1,i] = mat[row2,i];
            mat[row2,i] = temp;
        }
    }
      
    static void display(int [,]mat,int row, int col)
    {
        for (int i = 0; i < row; i++)
        {
            for (int j = 0; j < col; j++)
                Console.Write(" "+ mat[i,j]);
            Console.Write("\n");
        }
    }
      
    static int rankOfMatrix(int [,]mat)
    {
          
        int rank = C;
      
        for (int row = 0; row < rank; row++)
        {
            if (mat[row,row] != 0)
            {
                for (int col = 0; col < R; col++)
                {
                    if (col != row)
                    {
                        double mult =
                           (double)mat[col,row] /
                                    mat[row,row];
                                      
                        for (int i = 0; i < rank; i++)
                          
                            mat[col,i] -= (int) mult
                                     * mat[row,i];
                    }
                }
            }
            else
            {
                bool reduce = true;
                for (int i = row + 1; i < R; i++)
                {
                    if (mat[i,row] != 0)
                    {
                        swap(mat, row, i, rank);
                        reduce = false;
                        break ;
                    }
                }

                if (reduce)
                {
                    rank--;
                    for (int i = 0; i < R; i ++)
                        mat[i,row] = mat[i,rank];
                }
                row--;
            }

        }
          
        return rank;
    }
      
    public static void Main ()
    {
        int [,]mat = {{10, 20, 10},
                       {-20, -30, 10},
                       {30, 50, 0}};
                         
        Console.Write("Rank of the matrix is : "+ rankOfMatrix(mat));
    }
}
