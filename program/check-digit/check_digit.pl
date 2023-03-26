$x = 1;

if (length(do { no warnings "numeric"; $x & "" })){
   print "Digit\n";
} else {
   print "Not a digit\n";
}
