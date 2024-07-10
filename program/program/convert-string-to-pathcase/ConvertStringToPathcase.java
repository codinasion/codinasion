
class replaceSpace
{
	public static void main(String []args)
	{
	    String str = "Trial string";
	    String s="";
	    for (int i = 0; i < str.length(); ++i) {
			if (str.charAt(i) == ' ')
				s += '/';
			else
				s += str.charAt(i);
		}
		System.out.println(s);
	}
}
