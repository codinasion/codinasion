import java.util.Scanner;

public class Program
{
    public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
        System.out.print("Enter the time in seconds: ");
        int n = sc.nextInt();
        System.out.println(n);
        System.out.print("Time in minutes: " + n/60);
	}
}

Output :-
Enter the time in seconds: 300
Time in minutes: 5