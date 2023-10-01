#!/usr/bin/env perl
use strict;
use warnings;

sub time_12h_to_24h
{
    my($t12) = @_;
    my($hh,$mm,$ampm) = $t12 =~ m/^(\d\d?):(\d\d?)\s*([AP]M?)/i;
    $hh = ($hh % 12) + (($ampm =~ m/AM?/i) ? 0 : 12);
    return sprintf("%.2d:%.2d", $hh, $mm);
}

print time_12h_to_24h("10:10 PM");
