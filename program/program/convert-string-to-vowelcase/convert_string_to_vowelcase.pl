print "Enter a string: ";
chomp(my $str = <STDIN>);
my $result = '';
$str = lc($str);
foreach my $char (split //, $str) 
{ 
  if ($char =~ /[aeiou]/) 
  {   
    $result .= uc($char);
  } 
  else
  {    
    $result .= lc($char);
  }}
print $result;
