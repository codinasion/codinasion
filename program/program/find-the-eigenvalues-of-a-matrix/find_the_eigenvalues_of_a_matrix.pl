#!/usr/local/bin/perl
#
#this is how to install cpanm modules needed on mac
#curl -L http://xrl.us/installperlosx | bash
#cpanm Math::Matrix
#cpanm Math::MatrixDecomposition
#cpanm Math::MatrixDecomposition::Eigen
use Math::MatrixDecomposition qw(eig);
use Math::Matrix;

$matrix = Math::Matrix -> new([1,2,3],[4,5,6],[7,8,9]);
$matrix -> print("Matrix\n");

$row = $matrix -> getrow(0);

$eigen = eig ($A = [1,2,3,4,5,6,7,8,9]);

print "Print eigen values\n";
@all_values = $eigen->values();
foreach $value (@all_values) {
  print "$value\n";
}
