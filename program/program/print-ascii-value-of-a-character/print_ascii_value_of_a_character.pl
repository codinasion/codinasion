print "Please enter a character: ";
$char = <STDIN>;
chomp $char;
print("Ascii value of " . substr($char, 0, 1) . " : " . ord($char) . "\n");
