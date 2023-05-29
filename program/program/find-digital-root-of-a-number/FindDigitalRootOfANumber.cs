using System;
class DigitalRoot {
    static int digroot(int n)
    {
        int root = 0;
        while (n > 0 || root > 9)
        {
            if (n == 0) {
                n = root;
                root = 0;
            }
            root += n % 10;
            n /= 10;
        }
        return root;
    }

    public static void Main()
    {
        Console.Write(digroot(1234));
    }
}
