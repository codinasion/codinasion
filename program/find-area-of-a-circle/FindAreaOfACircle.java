import java.util.Scanner;

class FindAreaOfACircle {
	
	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		
		System.out.println("Enter radius of the circle");
		double radius = input.nextDouble();
		
		System.out.print("Area of circle for the given radius: " + Math.PI * radius * radius);	
	}
}