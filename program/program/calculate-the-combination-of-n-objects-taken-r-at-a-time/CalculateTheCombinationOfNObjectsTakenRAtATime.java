class CalculateTheCombinationOfNObjectsTakenRAtATime {
    public static void main(String[] args) {
        int n = 5;
        int r = 2;
        int nCr = factorial(n) / (factorial(r) * factorial(n - r));
        System.out.println(nCr);
    }

    public static int factorial(int n) {
        int fact = 1;
        for (int i = 1; i <= n; i++) {
            fact *= i;
        }
        return fact;
    }
}