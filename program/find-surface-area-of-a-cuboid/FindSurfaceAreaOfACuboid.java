import java.util.Scanner;

public class FindSurfaceAreaOfACuboid {
	
	public static int FindSurfaceAreaOfACuboid(int Height, int Width, int Length) {
		int hw, wl, hl;
		hw = Height*Width;
		wl = Width*Length;
		hl = Height*Length;
		return 2*(hw+wl+hl);
	}

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int height, width, length;
		height = scanner.nextInt();
		width = scanner.nextInt();
		length = scanner.nextInt();
		System.out.println(FindSurfaceAreaOfACuboid(height, width, length));
	}

}
