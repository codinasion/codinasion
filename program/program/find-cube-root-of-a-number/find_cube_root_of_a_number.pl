print "Enter a number : \n";
$input = <STDIN>;
if($input<0){
$input*=-1; 
$out=-1*$input**(1/3);
$input*=-1; 
}
else{
$out=$input**(1/3);
}
&printout;

sub printout{
print "The cube root of $input is $out\n\n";
}
