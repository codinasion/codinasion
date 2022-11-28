<?php
	$str = "String that we are gonna convert";
  for ($i = 0; $i < strlen($str); ++$i)
  {
     if ($str[$i] == ' ')
      {
        $str[$i] = '/';
      }
  }
  echo $str . "\n";
?>