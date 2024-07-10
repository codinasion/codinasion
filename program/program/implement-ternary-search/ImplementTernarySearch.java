import java.util.Arrays;
import java.util.Scanner;

public class ImplementTernarySearch {
    public static int ternarySearch(int[] arr, int value) {
        int l = 0;
        int r = arr.length - 1;

        while (l <= r) {
            int partitionSize = (r - l) / 3;
            int mid1 = l + partitionSize;
            int mid2 = r - partitionSize;

            if (arr[mid1] == value) {
                return mid1;
            }

            if (arr[mid2] == value) {
                return mid2;
            }

            if (value < arr[mid1]) {
                r = mid1 - 1;
            } else if (value > arr[mid2]) {
                l = mid2 + 1;
            } else {
                l = mid1 + 1;
                r = mid2 - 1;
            }
        }

        return -1; 
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the size of the array: ");
        int size = scanner.nextInt();

        int[] inputArray = new int[size];

        System.out.println("Enter the elements of the  array:");
        for (int i = 0; i < size; i++) {
            inputArray[i] = scanner.nextInt();
        }

        // Sort the array using Arrays.sort()
        Arrays.sort(inputArray);

        System.out.print("Enter the value to search: ");
        int searchValue = scanner.nextInt();

        int result = ternarySearch(inputArray, searchValue);

        if (result != -1) {
            System.out.println("Element found at index: " + result);
        } else {
            System.out.println("Element not found in the array.");
        }

        scanner.close(); 
    }
}