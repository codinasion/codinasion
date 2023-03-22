<?php
	function vowelCase($str) {
	  $vowels = ['a','e','i','o','u'];
	  $res = '';
	  for($i=0; $i< strlen($str); $i++){
	    if (in_array(strtolower($str[$i]), $vowels)){
	      $res .= strtoupper($str[$i]);
	    } else {
	      $res .= strtolower($str[$i]);
	    }
	  }
	  return $res;
	}
	
echo vowelCase('hello world');
?>
