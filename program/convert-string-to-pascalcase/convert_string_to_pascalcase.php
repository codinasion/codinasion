<?php

function pascalCase($string, $capitalizeFirstChar = false) {
   $str = str_replace(' ', '', ucwords($string, ' '));
   if (!$capitalizeFirstChar) {
      $str = lcfirst($str);
   }
   return $str;
}
echo pascalCase('hello world');

?>
