<?php
// This will replace the space to an underscore.
// Then it will take the newly formed string convert it to lower casing.
// So in the str_replace("What you want to change", "What it should be changed into", "Your input")
echo strtolower(str_replace(" ", "_", "hello world"));
