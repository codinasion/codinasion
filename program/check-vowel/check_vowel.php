<?php
	$str = readline('Enter letter: ');

  if ($str == 'a' 
  || $str == 'e'
  || $str == 'i' 
  || $str == 'o'
  || $str == 'u'
  || $str == 'A'
  || $str == 'E'
  || $str == 'I'
  || $str == 'O'
  || $str == 'U') {
    echo 'Vowel';
  }
  else {
    echo 'Is not a Vowel';
  }
?>
