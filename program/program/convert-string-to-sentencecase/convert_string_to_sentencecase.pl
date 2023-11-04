#!/usr/bin/perl

use strict;
use warnings;

sub sentence_case_with_replacement {
    my ($input, @fixed_words) = @_;
    my @sentences = split(/(\.|!|\?)\s+/, $input); # Split the input into sentences
    
    foreach my $sentence (@sentences) {
        $sentence =~ s/^\s+//; # Remove leading whitespace
        $sentence =~ s/\s+$//; # Remove trailing whitespace
        $sentence = ucfirst(lc($sentence)); # Convert to sentence case
        
        # Perform word replacements
        foreach my $word (@fixed_words) {
            $sentence =~ s/\b\Q$word\E\b/$word/gi; # Replace case-insensitively
        }
    }
    
    my $output = join(' ', @sentences); # Recombine the sentences with spaces
    
    return $output;
}

# Example 
my $input_string1 = "john and jane went to new york to visit the museum of modern art (moma).";
my @fixed_words1 = ("John", "Jane","New York", "Museum of Modern Art", "MoMA");

my $output_string1 = sentence_case_with_replacement($input_string1, @fixed_words1);

print $output_string1 . "\n";

my $input_string2 = "the united nations (un) is an international organization.";
my @fixed_words2 = ("The United Nations", "UN");

my $output_string2 = sentence_case_with_replacement($input_string2, @fixed_words2);

print $output_string2 . "\n";

my $input_string3 = "the cat is sleeping; however, the dog is awake.";
my @fixed_words3 = ();

my $output_string3 = sentence_case_with_replacement($input_string3, @fixed_words3);

print $output_string3 . "\n";
