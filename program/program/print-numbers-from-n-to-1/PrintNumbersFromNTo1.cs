    // Write a C# program to print numbers from n to 1

    // Input  : 5
    // Output : 5 4 3 2 1

public class PrintNumbersFromNTo1
{   

    public static void main(String[] args)
    {
        int n = 5;
        int i = 0;

        for(i = n; i > 1; i--)  
          {							
                Console.WriteLine(i);
      
          }
    }
}