-- Define a type alias for clarity
type Matrix a = [[a]]

-- Function to find the smallest element in a matrix
smallestElement :: (Ord a) => Matrix a -> a
smallestElement matrix = minimum $ concat matrix

-- Main function for testing
main :: IO ()
main = do
  -- Define a test matrix
  let matrix = [[4, 7, 3], [9, 4, 2], [0, 6, 4]]
  
  -- Print the smallest element
  print $ smallestElement matrix
