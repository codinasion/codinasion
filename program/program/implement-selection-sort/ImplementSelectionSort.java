public class SelectionSort {
    
    public static void main(String[] args) {
        int[] sortedArray = selectionSort([8, 5, 2, 6, 9, 3, 1, 4, 0, 7]);
        printArray(sortedArray);
    }

    public static int[] selectionSort(int[] list) {
        for (int i = 0; i < list.length - 1; i++) {
            int minInd = i;

            for (int j = i + 1; j < list.length; j++) {
                if (arr[j] < arr[minInd]) {
                    minInd = j;
                }
            }

            if (minInd != i) {
                int temp = arr[i];
                arr[i] = arr[minInd];
                arr[minInd] = temp;
            }
        }

        return arr;
    }

    public static void printArray(int[] arr) {
        for (int value : arr) {
            System.out.print(value + " ");
        }
        System.out.println();
    }
}