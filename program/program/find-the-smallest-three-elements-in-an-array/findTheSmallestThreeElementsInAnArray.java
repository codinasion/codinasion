import java.util.Arrays;

class SmallestThreeNumbers {
    public static void main(String[] args) {
        // Example array of numbers
        int[] arr = {10, 4, 3, 50, 23, 90};

        // Find and print the smallest three numbers
        int[] smallestThree = findSmallestThreeElementsInAnArray(arr);
        if(arr.length >= 3 ) {
            System.out.println("Smallest three numbers: " + Arrays.toString(smallestThree));
        }
    }

    public static int[] findSmallestThreeElementsInAnArray(int[] arr) {
        if (arr.length < 3) {
            System.out.println("Array size should be at least 3");
            return null;
        }
        else if (arr.length == 3){
            return arr;
        }
        // Create a temporary array so the original stays unaffected
        int[] tempArray = Arrays.copyOf(arr, arr.length);

        // Sort the new array in ascending order
        Arrays.sort(tempArray);

        // Create a new array to store the smallest three numbers
        int[] smallestThree = new int[3];
        for (int i = 0; i < 3; i++) {
            smallestThree[i] = tempArray[i];
        }

        return smallestThree;
    }
}
