package MyClass;
import java.util.Scanner;
public class FindVolumeOfACuboid {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		
		int Length = sc.nextInt();
		int Width = sc.nextInt();
		int Height = sc.nextInt();
		
		int calculate =(Length * Width * Height);
		
		System.out.println("Volume : "+ calculate);

	}

}
