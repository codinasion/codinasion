import java.util.Scanner;

public class AreaOfRAT {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int b, h;
        b = sc.nextInt();
        h = sc.nextInt();
        sc.close();
        System.out.println((b * h) / 2);
    }
}