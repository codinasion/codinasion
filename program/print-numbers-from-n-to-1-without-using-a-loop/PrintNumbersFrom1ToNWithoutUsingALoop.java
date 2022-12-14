public class PrintNumbersFrom1ToNWithoutUsingALoop {
    public static void main(String[] args) {
        print1ToN(5);
    }
    public static void print1ToN(int n){
        if(n == 1){
            System.out.println(n);
            return;
        }
        print1ToN(n-1);
        System.out.println(n);
    }
}
