class FindAverageOfNumbers {
    public static void main(String[] args) {
        int num = 12345;
        int sum = 0;
        int size = 0;

        while (num != 0) {
            sum += num % 10;
            size++;
            num = num / 10;
        }

        int average = sum / size;

        System.out.println(average);
    }
}