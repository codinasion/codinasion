<?php

function checkLowerCase($char) {
   return ctype_lower($char) ? 'Lower Case' : ' Not a Lower Case';
}

echo checkLowerCase('a');

?>
