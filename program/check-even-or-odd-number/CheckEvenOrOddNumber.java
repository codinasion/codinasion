import java.util.Scanner;

public class CheckEvenOrOddNumber {
	public static void main(String[] args) throws Exception {
		System.out.print("Enter number : ");

		Scanner sc = new Scanner(System.in);

		int num = sc.nextInt();

		sc.close();

    if ( num % 2 == 0){
      System.out.println(num + " is an even number.");
    }
    else{
      System.out.println(num + " is a odd number.");
    }
    
		
	}
}