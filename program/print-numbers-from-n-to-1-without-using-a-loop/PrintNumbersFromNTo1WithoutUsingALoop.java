import java.util.Scanner;
public class print1ton {

    public static void main(String[] args) {
        Scanner scan=new Scanner(System.in);
        System.out.print("Enter any No. : ");
        int n= scan.nextInt();
         print1ton obj=new print1ton();
        obj.printNumbers(n);

    }

    public void printNumbers(int n)
    {
        if(n<=0)
        {
            return;
        }
        else
        {
            // Recursively call printNumbers
            printNumbers(n-1);
            // Print number while returning from recursion
            System.out.print(" "+n);
        }
    }

}
