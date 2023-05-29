## Write a program to find surface area of a cuboid
length=0.0;
height=0.0;
width =0.0;

area  =0.0;

print "Enter length: ";
length = gets.chomp.to_f;  

print "Enter height: ";
height = gets.chomp.to_f;  

print "Enter width: ";
width = gets.chomp.to_f;  

area     = 2.0 * (width * length) + (length * height) + (height * width);


print "Area of Cuboids  is: ",area;

Length : 2
Width  : 3
Height : 4

Surface area : 52