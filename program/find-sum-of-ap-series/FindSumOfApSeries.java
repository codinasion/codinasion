
/*Author: Shashank Gurunaga  */
import java.util.*;
import java.lang.*;

public class findapseriessum {
    public static int APsum(int a1, int n1, int d1) {
        int sumofap = 0;
        for (int i = 0; i < n1; i++) {
            sumofap += a1;
            a1 += d1;
        }
        return sumofap;
    }

    public static void main(String[] Args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();// The number of terms in then AP series
        int a = scanner.nextInt();// First term of the AP series
        int d = scanner.nextInt(); // Common difference of the AP series
        int res = APsum(a, n, d);
        System.out.println("Sum of the AP Series: " + res);
    }

}
