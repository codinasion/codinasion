import java.util.*;
import java.lang.Math;

import java.util.Scanner;
public class FindCofactorOfMatrix {

    //Makes a temporary matrix which has the value obtained by deleting the ith row and jth column of the given Matrix.
	public static int[][] getTempMatrix(int[][] matrix, int p, int q) {        
        int temp[][] = new int[2][2];
        int m=0,n=0;
     
        for (int i=0;i<3;i++){
            for (int j=0;j<3;j++){
                if(i!=p && j!=q)
                temp[m][n++] = matrix[i][j];
                if (n == 2) {
                    n = 0;
                    m++;
                }
            }            
        }
        return temp;
    }

    /*Calls the getTempMatrix to get the temp matrix, which can be used to calculate the minor value, 
    which will help get the cofactor of the particalar elements*/
    public static int[][] getCofactor(int[][] matrix){
        int temp[][] = new int[2][2];
        int cofactormatrix[][] = new int [3][3];
        int minor =0;
        for (int i=0;i<3;i++){
            for (int j=0;j<3;j++){
                temp = getTempMatrix(matrix,i,j);
                minor = (temp[0][0]*temp[1][1]) - (temp[0][1]*temp[1][0]);
                cofactormatrix[i][j] = (int) (Math.pow(-1, (i+j))*minor);

            }
        }
            return cofactormatrix;
    }

    public static void main(String arg[]){
        //Get the 3x3 Matrix and save it
        try (Scanner sc = new Scanner(System.in)) {
            int matrix[][] = new int[3][3];
            for (int i=0;i<3;i++){
                for (int j=0;j<3;j++){
                    matrix[i][j] = sc.nextInt();
                }
            }
            // Call the getCofactor function and print the factors in the following manner:
            // [[-3, 6, -3], [6, -12, 6], [-3, 6, -3]]
            System.out.print("[");
            for (int i=0;i<3;i++){
                System.out.print("[");
                for (int j=0;j<3;j++){                    
                    System.out.print(getCofactor(matrix)[i][j]);
                    if(j!=2){
                        System.out.print(", ");
                    }
                }
                if(i!=2){
                    System.out.print("], ");
                }            
        }System.out.print("]]");
        }
    }
	}

