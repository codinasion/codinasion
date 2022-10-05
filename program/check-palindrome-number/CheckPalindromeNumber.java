public class palindrome {

    public static void main(String[] args) {

        int number = 12221;                               //number to check
        if (ispalindrome(number)) {                       //function returns true if palindrome else false        
            System.out.println("Palindrome number");
        } else {
            System.out.println("Not a palindrome number");
        }
    }

    public static boolean ispalindrome(int num) {           //palindrome function definition

        int temp = num;
        int r, sum = 0;
        while (num > 0) {
            r = num % 10;
            sum = (sum * 10) + r;
            num = num / 10;
        }
        if (temp == sum) {
            return true;
        } 
        return false;        
    }
}
