/**
 * CONTRIBUTOR: JASMIN, RAMON EMMIEL P.
 * COUNTRY: PHILIPPINES
 * DATE: FEBRUARY 14, 2023
 */

public class PrintPascalTriangle{
    public static void main(String[] args) {
        pascalTriangle(5);
    }

    public static void pascalTriangle(int rows){
        for (int line = 1; line <= rows; line++) {
            for (int j = 0; j <= rows - line; j++) {
                System.out.print(" ");
            }
            int C = 1;
            for (int i = 1; i <= line; i++) {
                System.out.print(C + " ");
                C = C * (line - i) / i;
            }
            System.out.println();
        }
    }
}