using System;
 
public class FindMaxContiguousSubarraySumCircular
{
    static int maxSubArraySumCircular(int[] a)
    {
        if (a.Length == 0) return 0;

        int sum = a[0];
        int currMax = a[0];
        int currMin = a[0];
        int maxTotal = a[0];
        int minTotal = a[0];

        for (int i = 1; i < a.Length; i++) {
            int val = a[i];

            currMax = val >= (currMax + val) ? val : (currMax + val);
            if (currMax > maxTotal)
                maxTotal = currMax;

            currMin = val < (currMin + val) ? val : (currMin + val);
            if (currMin < minTotal)
                minTotal = currMin;

            sum += val;
        }

        if (sum == minTotal)
            return maxTotal;

        return (sum - minTotal) > maxTotal ? (sum - minTotal) : maxTotal;
    }
     
    public static void Main ()
    {
        int[] a = {-2, -3, 4, -1, -2, 1, 5, -3};
        Console.Write("Max contiguous subarray sum (circular): " + maxSubArraySumCircular(a));
    }
}