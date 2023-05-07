object reverseString extends App {

val s = "abcd"
print(reverse(s))

def reverse(s: String): String = {
if (s.length == 1)  s
else reverse(s.tail) + s.head

}
}

