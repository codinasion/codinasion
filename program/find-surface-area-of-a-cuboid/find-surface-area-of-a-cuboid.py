import math

length = float(input("Enter the length of the cuboid: "))
breadth = float(input("Enter the breadth of the cuboid: "))
height = float(input("Enter the height of the cuboid: "))

# Function to calculate surface area of a cuboid
def find_surface_area(length, breadth, height):

    # Formula of surface_area = 2(lb + bh + hl)
    surface_area = 2 * (length * breadth + breadth * height + height * length)

    # Display surface area
    print("\nThe surface area of the cuboid is: ", surface_area)


find_surface_area(length, breadth, height)
