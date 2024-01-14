import java.util.Arrays;

public class Main {
    // Function to find and print the smallest two elements
    public static void findSmallestTwo(int[] arr) {
        // Sort the array
        Arrays.sort(arr);

        // Print the first two elements
        System.out.println("Smallest two elements: " + arr[0] + " " + arr[1]);
    }

    public static void main(String[] args) {
        int[] arr1 = {12, 13, 1, 10, 34, 1};
        System.out.print("Input 1: ");
        for (int value : arr1) {
            System.out.print(value + " ");
        }
        System.out.println();
        findSmallestTwo(arr1);

        System.out.println();

        int[] arr2 = {10, 5, 10};
        System.out.print("Input 2: ");
        for (int value : arr2) {
            System.out.print(value + " ");
        }
        System.out.println();
        findSmallestTwo(arr2);
    }
}
