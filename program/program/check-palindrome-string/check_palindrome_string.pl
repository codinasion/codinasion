print "Enter a word :";
my $name=<STDIN>;
chomp($name);
@arr=split(//,$name);
$count=@arr;
$num=0;
for ($i=0;$i<$count;$i++){
    if ($arr[$i] eq $arr[$count-1]){
        $count--;
    }else{
        $num++;
        last;
    }
}
if ($num == 0){
    print "It is a palindrome";
}else{
    print "It is not a palindrome";
}
