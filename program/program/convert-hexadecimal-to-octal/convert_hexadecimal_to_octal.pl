print "Enter the hexadecimal value :";
my $hex_str = hex(<STDIN>);
my $oct_value = sprintf("%o", $hex_str);
print "Equivalent Octal value :".$oct_value;
