import java.util.Scanner;

public class FindSmallestElementInAMatrix {
    public static void main(String[] args) {

        Scanner scnr = new Scanner(System.in);
        int i, j, k =0;
        int smallest = 0;
        int arr[][] = new int[3][3];
        System.out.println("Enter the input values");
        for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
                arr[i][j] = scnr.nextInt();
            }
        }
        for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
                if (j == 0 && i == 0) {
                    k = arr[0][0];
                    continue;
                }
                if (k < arr[i][j]) {
                    smallest = k;
                }
                else {
                    smallest = arr[i][j];
                }
                k = smallest;
            }
        }
        System.out.println(smallest);
    }
}
