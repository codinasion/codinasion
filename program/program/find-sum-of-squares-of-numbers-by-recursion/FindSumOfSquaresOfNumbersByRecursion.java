import java.util.Arrays;

class FindSumOfSquaresOfNumbersByRecursion {
    public static void main(String[] args) {
        String input = "1 2 3 4 5";
        int[] arr = Arrays.stream(input.split(" ")).mapToInt(Integer::parseInt).toArray();
        int n = arr.length;
        System.out.println("Result : " + sumOfSquares(arr, n)); // 55
    }

    private static int sumOfSquares(int[] arr, int n) {
        if (n == 0) {
            return 0;
        }
        return (arr[n - 1] * arr[n - 1]) + sumOfSquares(arr, n - 1);
    }
}