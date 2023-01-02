<?php

function consonantCase($str) {
  $split =  str_split(strtolower($str));
  foreach ($split as $char) {
   if(preg_match('/^[^aeiou]*$/i', $char) === 0) {
     echo strtolower($char);
   } else {
     echo strtoupper($char);
   }
}

}


consonantCase("hello world")

?>
