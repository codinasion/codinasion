# By Soham Gupta (http://github.com/gupta-soham/) (https://www.linkedin.com/in/soham-gupta-in/)

# A Perl program to check palindrome numbe
# Input  : 121
# Output : Palindrome Number


print "Enter a number: ";
$n = <STDIN>;
# $n = 121
$t = $n;
$s = 0;
while ($n > 0) {
    $r = $n % 10;
    $s = ($s * 10) + $r;
    $n = int($n / 10);
}

if ($t == $s) {
    print "Number is Palindrome!\n";
} 
else {
    print "Number is not Palindrome!\n";
}