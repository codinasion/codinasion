import java.util.Scanner;

public class Program
{
    public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
        System.out.print("Enter the length in miles: ");
        int n = sc.nextInt();
        System.out.println(n);
        System.out.print("Length in feet: " + n*5280);
	}
}

Output :- 
Enter the length in miles: 5
Length in feet: 26400