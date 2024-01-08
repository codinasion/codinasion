<?php

#PHP program to reverse words in a string

# Check if a string to reverse was passed in, if not, show error and usage message.
if(isset($argv[1])){

	$string = $argv[1]; # Grab string to be reversed from input argument

	$words = preg_split('/\s+/', $string); # Split string at whitespaces, resulting in an array of words

	$words = array_reverse($words); # Reverse the words array
	
	$reversed_string = join(" ", $words); # Join words array back to a single string using a space between words

	echo $reversed_string;  # Output the resulting reversed string.
	exit(0); # Successful exit
}

else{

	echo "No string was provided.\r\nUsage: php ", __FILE__, " \"String to reverse\"\r\n";
	exit(1); # Error exit
}

?>
