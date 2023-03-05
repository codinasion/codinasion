<?php
	$str = readline('Enter letter: ');

  if (ctype_upper($str)) {
    echo 'Uppercase';
  } else {
    echo 'Lowercase';
  }
?>
