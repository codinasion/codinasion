import java.util.*;
import java.io.*;
public class Main
{
	public static void main(String[] args) {
	    System.out.print("Please enter the feet value: ");
	    Scanner sc=new Scanner(System.in);
	    int feet=sc.nextInt();
	    int inches = feet*12;
	   System.out.print(feet+" feet is "+inches+ " inches");
		
	}
}
