public class CheckPalindromeNumber {
    public static void main(String[] args) {
        int number = 12221;                               //number to check
        if (ispalindrome(number))                   //function returns true if palindrome else false        
            System.out.println(ispalindrome(number)?"Palindrome number":"Not a palindrome number");
    }

    public static boolean ispalindrome(int num) {           //palindrome function definition

        int temp = num;
        int r, sum = 0;
        while (num > 0) {
            r = num % 10;
            sum = (sum * 10) + r;
            num /= 10;
        }
        return temp==sum;     
    }
}
