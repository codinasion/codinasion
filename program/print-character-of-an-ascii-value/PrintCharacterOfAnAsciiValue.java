import java.util.Scanner;
public class AsciiValue {

	public static void main(String[] args)
	{

	Scanner sc = new Scanner(System.in);
	System.out.println("Enter the Character:");
  char ch = sc.next().charAt(0);
int asciiVal= ch;
		System.out.println("The ASCII value  is: " + asciiVal);
	}
}
