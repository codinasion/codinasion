-- Binary search function
binarySearch :: (Ord a) => [a] -> a -> Int
binarySearch arr x = binarySearchHelper arr x 0 (length arr - 1)

-- Helper function to perform the binary search
binarySearchHelper :: (Ord a) => [a] -> a -> Int -> Int -> Int
binarySearchHelper arr x lowerBound upperBound
  | upperBound < lowerBound = -1  -- x does not exist
  | arr !! midPoint < x      = binarySearchHelper arr x (midPoint + 1) upperBound
  | arr !! midPoint > x      = binarySearchHelper arr x lowerBound (midPoint - 1)
  | otherwise                = midPoint  -- x found at midPoint
  where
    midPoint = lowerBound + (upperBound - lowerBound) `div` 2

-- Example usage
main :: IO ()
main = do
    let arr = [2, 3, 4, 10, 40]
    let x = 10
    let result = binarySearch arr x
    if result /= -1
        then putStrLn $ "Element " ++ show x ++ " is present at index " ++ show result
        else putStrLn $ "Element " ++ show x ++ " is not present in array"
