import java.util.*;
import java.io.*;
import java.text.*;
// import java.lang;
public class Main
{
	public static void main(String[] args) {
	    DecimalFormat df = new DecimalFormat("0.00");
	    Scanner sc=new Scanner(System.in);
	    int miles=sc.nextInt();
		System.out.println(df.format(miles*1609.344));
	}
}
