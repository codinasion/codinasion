<?php

function anagram($pharse1, $pharse2){
   $status = 'Not an Anagram Strings';
  if($pharse1 && $pharse2){
   $pharse1=strtolower(str_replace(" ","", $pharse1));
   $pharse2=strtolower(str_replace(" ","", $pharse2));
   $pharse1 = str_split($pharse1);
   $pharse2 = str_split($pharse2);
   sort($pharse1);
   sort($pharse2);
   if($pharse1 === $pharse2){
   $status = 'Anagram Strings';
   } 
  }
  return $status;

}

echo anagram('pan' , 'nap');
?>
