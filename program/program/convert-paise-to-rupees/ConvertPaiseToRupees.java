import java.util.Scanner;

class ConvertPaiseToRupees {
	
	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		
		System.out.print("Input ( Ps ) : ");
		int currencyInPaise = input.nextInt();
		
		System.out.print("Output ( Rs ) : " + (currencyInPaise / 100));
	}
	
	
}