using System;
 
class Matrix {
     
    static int findNormal(int [,]mat, int n)
    {
        int sum = 0;
         
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
                sum += mat[i,j] * mat[i,j];
                 
        return (int)Math.Sqrt(sum);
    }
     

    static int findTrace(int [,]mat, int n)
    {
        int sum = 0;
         
        for (int i = 0; i < n; i++)
            sum += mat[i,i];
             
        return sum;
    }
     
    public static void Main ()
    {
        int [,]mat = { {1, 2, 3},
                       {4, 5, 6},
                       {7, 8, 9},
    };
 
    Console.Write ("Trace of Matrix = "+ findTrace(mat, 3) + "\n");

         
    }
}
