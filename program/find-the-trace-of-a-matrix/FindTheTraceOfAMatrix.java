import java.util.Scanner;

public class FindTheTraceOfAMatrix {
  private static Scanner scanner_input;

  public static void main(String[] args) {

    int i = 0, j, dimension, trace = 0;
    scanner_input = new Scanner(System.in);
    System.out.print("Enter Matrix Dimension:  ");
    dimension = scanner_input.nextInt();
    int[][] matrix_array = new int[dimension][dimension];
    System.out.println("Enter the Matrix Items:  ");
    while (i < dimension) {
      j = 0;
      while (j < dimension) {
        matrix_array[i][j] = scanner_input.nextInt();
        j++;
      }
      i++;
    }

    i = 0;
    while (i < dimension) {
      j = 0;
      while (j < dimension) {
        if (i == j) {
          trace = trace + matrix_array[i][j];
        }
        j++;
      }
      i++;
    }
    scanner_input.close();
    System.out.println("\nThe Trace Of the Matrix is :  " + trace);

  }
}
