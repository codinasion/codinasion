using System;
class Average {
     
    static double average(int []a, int n)
    {

        int sum = 0;
         
        for (int i = 0; i < n; i++)
            sum += a[i];
     
        return (double)sum / n;
    }
     
    public static void Main ()
    {
         
        int []arr = {1, 2, 3, 4, 5};
        int n = arr.Length;
     
        Console.Write(average(arr, n));
    }
}
