import java.util.Scanner;

class FindSmallestNumberInAnArray {
	public static void main(String[] args) {
		System.out.println(FindSmallestNumberInAnArray.findSmallestNumber(new double[] { 100, 50.25, 10, 76, 3 }));
	}

	private static double findSmallestNumber(double[] array) {
		double smallest = array[0];

		for (int i = 0; i < array.length; i++) {
			double currentItem = array[i];

			if (currentItem < smallest) {
				smallest = currentItem;
			}
		}
		return smallest;
	}
}
