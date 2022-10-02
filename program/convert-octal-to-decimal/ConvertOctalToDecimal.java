package MyClass;
import java.util.Scanner;
public class ConvertOctalToDecimal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int b = sc.nextInt();
		int f = getAnybasetoDecimal(n , b);
		System.out.println(f);

	}
	public static int getAnybasetoDecimal(int n , int b ) {
		int rv = 0;
		int p = 1;
		while(n>0) {
			int dig = n % 10;
			n = n / 10;
			rv += dig * p;
			p = p* b;
		}
		return rv;
	}

}
