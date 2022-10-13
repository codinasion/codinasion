import java.util.*;
import java.io.*;
import java.text.*;
public class Main
{
    public static int Factorial(int n){
        int fact=1;
        for(int i=1;i<=n;i++){
            fact*=i;
        }
        return fact;
    }
    
	public static void main(String[] args) {
	    Scanner sc=new Scanner(System.in);
	    int n=sc.nextInt();
		System.out.println(Factorial(n));
	}
}

// Contributed by Raghav Garg (@grraghav120)
