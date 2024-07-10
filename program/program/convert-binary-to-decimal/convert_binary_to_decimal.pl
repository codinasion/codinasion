sub binary2decimal {
   return unpack("N", pack("B32", substr("0" x 32 . shift, -32)));
}

$binary = '1010';
@res = binary2decimal('1010');
print "Decimal representation of $binary is: ", @res;
