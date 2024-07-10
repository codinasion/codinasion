$string="The quick brown fox jumps over the lazy dog";
$string = lc($string);
$string =~ s/\s*//g;
$string =~s/(.)(?=.*?\1)//g;
print $string;
print length($string);
if(length($string) == 26){
    print 'Pangram Sentence';
} else {
    print 'Not a Pangram Sentence';
}
