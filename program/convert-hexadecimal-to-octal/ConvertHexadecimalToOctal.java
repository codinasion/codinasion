public class hexadecimalToOctal {
    static String hexatoOctal(String hex){
        Integer binary=Integer.parseInt(hex,16);
        return Integer.toOctalString(binary);
    }

    public static void main(String[] args) {
        System.out.println(hexatoOctal("7B316"));
    }
    
  }
  