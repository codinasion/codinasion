using System;
 
class AVERAGE {

    static double avgRec(int[] a, int i)
    {
        int n = a.Length;
        if (i == n-1)
            return a[i];
     
        if (i == 0)
            return ((a[i] + avgRec(a, i+1))/n);
     
        return (a[i] + avgRec(a, i+1));
    }
     
 
    public static void Main ()
    {   
       int []arr = {1,2,3}; 
       Console.Write(avgRec(arr, 0));
    }
}
