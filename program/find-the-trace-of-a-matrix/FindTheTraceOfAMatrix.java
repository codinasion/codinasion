import java.util.Scanner;

public class FindTheTraceOfAMatrix {
  private static Scanner scanner_input;

  public static void main(String[] args) {

    int i = 0, j, rows, columns, trace = 0;
    scanner_input = new Scanner(System.in);
    System.out.print("Enter Matrix Rows and Columns:  ");
    rows = scanner_input.nextInt();
    columns = scanner_input.nextInt();
    int[][] matrix_array = new int[rows][columns];
    System.out.println("Enter the Matrix Items:  ");
    while (i < rows) {
      j = 0;
      while (j < columns) {
        matrix_array[i][j] = scanner_input.nextInt();
        j++;
      }
      i++;
    }

    i = 0;
    while (i < rows) {
      j = 0;
      while (j < columns) {
        if (i == j) {
          trace = trace + matrix_array[i][j];
        }
        j++;
      }
      i++;
    }

    System.out.println("\nThe Trace Of the Matrix is :  " + trace);

  }
}