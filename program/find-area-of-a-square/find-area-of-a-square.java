import java.util.Scanner;

public class Program
{
    public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
        System.out.print("Enter the side of the square: ");
        int n = sc.nextInt();
        System.out.println(n);
        System.out.print("Area of the square: " + n*n);
	}
}

Output :-
Enter the side of the square: 5
Area of the square: 25