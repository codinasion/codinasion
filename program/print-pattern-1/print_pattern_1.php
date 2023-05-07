<?php	

function printPattern($n){
for ($i=1; $i<=$n; $i++)	
{	 
for($j=1;$j<=$i;$j++)	  
{	  	
echo $j." ";	 
}	  	
echo "<br/>";   	
}  
}
printPattern(5);

?>
