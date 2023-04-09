class Main
{
    public static String reverseCase(String str)
    {
        char[] chars = str.toCharArray();
        for (int i = 0; i < chars.length; i++)
        {
            chars[i] = Character.isUpperCase(chars[i])
                                ? Character.toLowerCase(chars[i])
                                : Character.toUpperCase(chars[i]);
        }
        return new String(chars);
    }
 
    public static void main(String[] args)
    {
        String str = "hello world";
        System.out.println(reverseCase(str));
    }
}
