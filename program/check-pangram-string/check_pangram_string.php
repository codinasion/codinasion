<?php
function isPangram($param) {
		
		$sentences = strtolower(trim($param));
		$letters = str_split("thequickbrownfoxjumpsoverthelazydog");

		foreach ($letters as $letter) {
			if (!strstr($sentences, $letter))
				return 'Not a Pangram sentence';
		}

		return 'Pangram sentence';
	}

echo isPangram('The quick brown fox jumps over the lazy dog');
?>
