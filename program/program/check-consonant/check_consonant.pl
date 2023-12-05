use experimental 'smartmatch';
sub checkConsonants{
  my ($char) = @_;
  $consonant = "";
  if(lc($char) ~~ ['a', 'e', 'i', 'o', 'u']) {
    $consonant = "Is not a Consonant";
  } else {
    $consonant = "Consonant";
  }
  print $consonant;
}

checkConsonants("b");
