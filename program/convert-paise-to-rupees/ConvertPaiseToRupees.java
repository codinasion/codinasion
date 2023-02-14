import java.util.Scanner;

class ConvertPaiseToRupees {
	
	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		
		System.out.print("Input ( Paise ) : ");
		int currencyInPaise = input.nextInt();
		
		System.out.print("Output ( Rupees ) : " + (currencyInPaise / 100));
	}
	
	
}
