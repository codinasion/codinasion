# Python program to find the
# Surface area
# prism
 
import math

length = float(input("Enter the length of the cuboid: "))
breadth = float(input("Enter the breadth of the cuboid: "))
height = float(input("Enter the height of the cuboid: "))
 
# function to calculate
# Surface area
def find_surafce_area(length, breadth, height):
     
    # formula of surface_area = 2(lb + bh + hl)
    Surface_area = 2 * ( length * breadth + breadth * height + height * length)
     
    # Display surface area
    print("The surface area of the cuboid is :", Surface_area)

find_surafce_area(length, breadth, height)


# Test case 1
"""
Length : 2
Width  : 3
Height : 4

Surface area : 52
"""
find_surafce_area(length=2, breadth=3, height=4)