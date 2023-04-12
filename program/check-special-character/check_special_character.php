<?php
  $string = readLine("Enter String: ");
  if (preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $string)) {
    echo "one or more 'special characters' found";
  } else {
    echo "no 'special characters' found";
  }
?>
