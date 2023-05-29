import java.util.*;
import java.io.*;
import java.text.*;
public class Main
{
    public static int ReverseNo(int n){
        int rev=0;
        for(int i=n;i>0;i=i/10){
            int mod=i%10;
            rev=rev*10+mod;
        }
        return rev;
    }
    
	public static void main(String[] args) {
	    Scanner sc=new Scanner(System.in);
	    int n=sc.nextInt();
		System.out.println(ReverseNo(n));
	}
}

// Contributed by Raghav Garg (@grraghav120)
