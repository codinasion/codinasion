my $str = 'hello world';
$_ = $str;
$_ = uc;
s/\s+/_/g;
print;
