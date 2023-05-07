&table(2);

sub table{
	
	my $i = 1;
	my $loop;
	
	foreach $loop(@_){
		for($i;$i<=10;$i++){
		  my $ans = $i*$loop;
	      print"$loop x $i = $ans \n";
		}	  
	   print"\n";   
	}
}
