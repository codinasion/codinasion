<?php

function hexaToBinary($hex) {
 $binary = base_convert($hex, 16, 2);
 echo $hex . ' -> binary value is: ' . $binary;
}

hexaToBinary('A')
?>
