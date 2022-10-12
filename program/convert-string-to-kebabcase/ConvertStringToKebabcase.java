import java.util.Scanner;
public class Main
{
	public static void main(String[] args) {
	    System.out.println("Input  : ");
	    Scanner sc=new Scanner(System.in);
	    String a=sc.nextLine();
	    String b=a.replace(' ','-');
	    System.out.println(b.toLowerCase());
	}
}
