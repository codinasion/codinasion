import java.util.Scanner;

class PrintFibonacciSeriesWithoutRecursion {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter number : ");
        int n = scanner.nextInt();

        int a = 0, b = 1, c;
        System.out.print(a + " " + b + " ");
        
        for (int i = 2; i < n; i++) {
            c = a + b;
            System.out.print(c + " ");
            a = b;
            b = c;
        }
    }
}