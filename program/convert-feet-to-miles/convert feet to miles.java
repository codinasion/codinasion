import java.util.Scanner;

public class Program
{
    public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
        System.out.print("Enter the length in feet: ");
        int n = sc.nextInt();
        System.out.println(n);
        System.out.print("Length in miles: " + n/5280);
	}
}

Output :-
Enter the length in feet: 26400
Length in miles: 5