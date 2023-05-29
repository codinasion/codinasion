import java.util.Scanner;

 class FindFactorialOfANumberByRecursion {
	
	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		
		System.out.println("Enter a number: ");
		int number = input.nextInt();
		
		System.out.print("Factorial of the entered number is: " + factorial(number));
	}
	
	static int factorial(int number) {
	if(number == 0)
		return 1;
	else
		return number * factorial(number - 1);
	}
	
}