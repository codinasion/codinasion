import java.util.Scanner;
public class FindPerimeterOfASquare
{
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter the side of the square:");
		double peri = sc.nextDouble();
		double  perimeter = 4*peri;
		System.out.println("Perimeter: " + perimeter);
	}
}

// Contributed by Raghav Garg (@grraghav120)
