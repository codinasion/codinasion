public class ImplementLinearSearch {

    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5};
        int index = linearSearch(array, 4);
        System.out.println(index);
    }

    private static int linearSearch(int[] array, int target) {
        if (array.length > 0) {
            for (int i = 0; i < array.length; i++) {
                if (array[i] == target) return i;
            }
        }
        return -1;
    }
}
