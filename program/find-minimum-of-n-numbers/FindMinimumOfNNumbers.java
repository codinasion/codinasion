import java.util.*;
import java.io.*;
import java.text.*;
// import java.lang;
public class Main
{
	public static void main(String[] args) {
	    Scanner sc=new Scanner(System.in);
	    int n=sc.nextInt();
	    int arr[]=new int[n];
	    for(int i=0;i<n;i++){
	        arr[i]=sc.nextInt();
	    }
	    int mini=100000009;
	    for(int i=0;i<n;i++){
	        if(arr[i]<mini) mini=arr[i];
	    }
		System.out.println(mini);
	}
}
