import java.io.*;
import java.util.Scanner;

class GCD {
    static int gcd(int a, int b) {
        if (b == 0)
            return a;
        return gcd(b, a % b);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();
        int b = sc.nextInt();
        sc.close();

        System.out.println("GCD of " + a + " and " + b + " is " + gcd(a, b));
    }
}
