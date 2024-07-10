#!/usr/bin/perl

use strict;
use warnings;

sub reverse_words {
    my ($input_string) = @_;

    # Split the input string into words
    my @words = split /\s+/, $input_string;

    # Reverse the order of words
    my $output_string = join ' ', reverse @words;

    return $output_string;
}

# Example usage
my $input_string = "Hello World";
my $output_string = reverse_words($input_string);

print "Input  : \"$input_string\"\n";
print "Output : \"$output_string\"\n";
