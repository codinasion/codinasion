public class FindAverageOfNumbersByRecursion {
    // a is array, i is index and n is size of array
    static double avgRec(int a[], int i, int n) {
        // for last element
        if (i == n - 1)
            return a[i];

        // When index is 0, divide sum computed so far by n.
        if (i == 0)
            return ((a[i] + avgRec(a, i + 1, n)) / n);

        // Compute sum
        return (a[i] + avgRec(a, i + 1, n));
    }

    public static void main(String[] args) {
        int arr[] = { 1, 2, 3, 4, 5 };
        int n = arr.length;

        System.out.println(avgRec(arr, 0, n));
    }
}
