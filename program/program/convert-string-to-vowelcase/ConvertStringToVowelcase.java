public class ConvertStringToVowelcase {
  public static void main(String[] args) {
    String val = "Hello world!";
    val.toLowerCase().chars().mapToObj(c -> (char) c).forEach(c -> {
      if ("aeiou".contains(c.toString())) {
        System.out.print(Character.toUpperCase(c));
      } else {
        System.out.print(c);
      }
    });
  }
}
