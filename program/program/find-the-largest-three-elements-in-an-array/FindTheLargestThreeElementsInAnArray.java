import java.util.Arrays;

public class LargestThreeElements {
    public static void main(String[] args) {
        int[] array = {12, 45, 78, 34, 56, 23, 89, 67, 90, 32};

        findLargestThreeElements(array);
    }

    public static void findLargestThreeElements(int[] array) {
        if (array.length < 3) {
            System.out.println("Array should have at least three elements");
            return;
        }

        Arrays.sort(array);

        int n = array.length;

        System.out.println("Largest three elements are: ");
        System.out.println(array[n - 1]); // Largest element
        System.out.println(array[n - 2]); // Second largest element
        System.out.println(array[n - 3]); // Third largest element
    }
}
