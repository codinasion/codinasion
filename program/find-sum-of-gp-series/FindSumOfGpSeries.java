/* Author: Shashank Gurunaga */
import java.lang.Math;
import java.util.*;

public class findgpseriessum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        float a0, r, i, an;
        int n;
        float sum = 0;

        System.out.println("Enter the first number in the G.P. series: ");
        a0 = scanner.nextFloat();
        System.out.println("Enter the number of digits  in the G.P. series ");
        n = scanner.nextInt();
        System.out.print("Enter the  ratio of G.P. series ");
        r = scanner.nextFloat();

        sum = (float) ((a0 * (1 - Math.pow(r, n + 1))) / (1 - r));
        an = (float) (a0 * (1 - Math.pow(r, n - 1)));

        System.out.println("nth term of G.P:" + an);
        System.out.println("Sum of the G.P:" + sum);
    }
}
