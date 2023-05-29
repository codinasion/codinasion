public class FindMaximumOfNNumbers
{
    public static int findMaximum(int... numbers)
    {
        // return maximum value in the array
        return Arrays.stream(numbers).max().getAsInt();
    }
    public static void main(String[] args)
    {
        System.out.println(findMaximum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
    }
}