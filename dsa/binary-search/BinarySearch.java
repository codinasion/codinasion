public class BinarySearch {
    public static void main(String[] args) {
        int[] arr = { 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 };
        int target = 30;
        int index = binarySearch(arr, target);
        System.out.println(index != -1 ? "Element found at index " + index : "Element not found");
    }

    private static int binarySearch(int[] arr, int target) {
        int min = 0;
        int max = arr.length - 1;
        while (min <= max) {
            int mid = min + (max - min) / 2;
            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] < target) {
                min = mid + 1;
            } else if (arr[mid] > target) {
                max = mid - 1;
            }
        }
        return -1;
    }
}

// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search