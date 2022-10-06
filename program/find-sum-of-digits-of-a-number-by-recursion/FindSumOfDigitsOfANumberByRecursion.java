public class FindSumOfDigitsOfANumberByRecursion {
    public static void main(String[] args) {

        int num = 12345;
        System.out.print(sum(num));
    }

    static int sum(int num) {
        if (num == 0) {
            return 0;
        }

        return (num % 10 + sum(num / 10));
    }
}
