import java.io.*;
 
class Matrix {
    static int N = 3;

    static void rotate90Degrees(int arr[][])
    {
        for (int j = 0; j < N; j++)
        {
            for (int i = N - 1; i >= 0; i--)
                System.out.print(arr[i][j] + " ");
                System.out.print("\n");
        }
    }
    public static void main(String[] args)
    {
        int arr[][] = { { 1, 2, 3 },
                        { 4, 5, 6 },
                        { 7, 8, 9 }} ;
        rotate90Degrees(arr);
    }
}
