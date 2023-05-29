radius=0.0;
height=0.0;
surfaceArea=0.0;

print "Enter radius: ";
radius = gets.chomp.to_f;  

print "Enter slant height: ";
height = gets.chomp.to_f;  

surfaceArea = 3.14 * radius * ( radius + height );

print "Surface area of cone is: ",surfaceArea.to_f.round(2);
