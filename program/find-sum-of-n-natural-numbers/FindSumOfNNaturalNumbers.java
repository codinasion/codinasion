public class FindSumOfNNaturalNumbers {
    public static void main(String[] args) {
        int num = 8;
        int sum = 0;

        for (int i = 1; i <= num; i++) {
            sum += i;
        }

        System.out.println(sum);
    }
}