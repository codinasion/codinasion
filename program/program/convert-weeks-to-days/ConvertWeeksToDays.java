import java.util.*;
import java.io.*;
public class Main
{
	public static void main(String[] args) {
	    System.out.print("Please enter the number of weeks: ");
	    Scanner sc=new Scanner(System.in);
	    int week=sc.nextInt();
	    int days = week*7;
	   System.out.print(week+" weeks is "+days+ " days");
		
	}
}
