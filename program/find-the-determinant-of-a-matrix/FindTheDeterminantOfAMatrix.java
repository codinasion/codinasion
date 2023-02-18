
import java.util.Scanner;

public class FindTheDeterminantOfAMatrix {
    public static void main(String[] args) {

        Scanner scnr = new Scanner(System.in);
        int i, j;
        int determinant = 0;
        int arr[][] = new int[3][3];
        System.out.println("Enter the input values");
        for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
                arr[i][j] = scnr.nextInt();
            }
        }

        determinant = arr[0][0]*(arr[1][1]*arr[2][2] - arr[2][1]*arr[1][2]) -  (arr[0][1]*(arr[1][0]*arr[2][2] - arr[1][2]*arr[2][0])) +  (arr[0][2]*(arr[1][0]*arr[2][1] - arr[2][0]*arr[1][1]));

        System.out.println(determinant);
    }
}
