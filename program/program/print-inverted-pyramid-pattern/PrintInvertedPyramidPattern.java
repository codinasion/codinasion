import java.util.*;
public class PrintInvertedPyramidPattern {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        sc.close();
        for (int i = t; i > 0; i--) {
            for (int j = 1; j < i + 1; j++) {
                System.out.print(j + " ");
            }
            System.out.println();
        }
    }
}
