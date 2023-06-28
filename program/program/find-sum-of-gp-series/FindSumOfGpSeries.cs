using System;
class GP {
    static float sumOfGP(float a, float r, int n)
    {
        float sum = 0; 
        for (int i = 0; i < n; i++)
        {
            sum = sum + a;
            a = a * r;
        }
        return sum;
    }

    static public void Main ()
    {
        Console.WriteLine((sumOfGP(2, 3, 3)));
    }
}
