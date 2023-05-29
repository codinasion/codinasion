import java.util.*;
import java.io.*;
public class Main
{
	public static void main(String[] args) {
	    System.out.print("Please enter the inch value: ");
	    Scanner sc=new Scanner(System.in);
	    int inches=sc.nextInt();
	    int feet = inches/12;
	   System.out.print(inches+" inches is "+feet+ " feet");

	}
}
