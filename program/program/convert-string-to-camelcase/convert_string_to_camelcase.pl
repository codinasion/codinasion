my $str = 'hello world';
$_ = $str;
$_ = lc;
s/(?<=[^\W_]) +([^\W_])|_+/\U$1/g;
print;
