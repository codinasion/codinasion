import java.util.Scanner;

public class FindSumOfAllNumbers {
    public static void main(String[] args) {
        int n, sum = 0;

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the size of array");
        n = sc.nextInt();

        System.out.println("Enter the array elements");
        int[] arr = new int[n];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = sc.nextInt();
        }

        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        System.out.println("Sum of all numbers in an array = " + sum);
    }
}
