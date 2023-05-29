import java.util.*;
public class FindGcdOfTwoNumbers
{
    public static void main(String args[])
    {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter two numbers :");
        int a=sc.nextInt();
        int b=sc.nextInt();

		int result = Math.min(a, b); // Find Minimum of a nd b
		while (result > 0) {
			if (a % result == 0 && b % result == 0) {
				break;
			}
			result--;
		}
		System.out.println(result); 
	}
}