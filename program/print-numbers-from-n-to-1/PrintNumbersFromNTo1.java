import java.util.Scanner;

// Write a Java program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1

public class PrintNumbersFromNTo1() {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		
		int num = sc.nextInt();

    int i = num;
		
		while(i > 0)
    {
       System.out.println(i + " ");

       i = i - 1;
    }
	

	}

}

// contributed by Technical Amanjeet 
