import Data.List

-- Jump search function
jumpSearch :: (Ord a) => [a] -> a -> Maybe Int
jumpSearch arr x
    | null arr = Nothing
    | otherwise =
        let n = length arr
            blockSize = floor (sqrt (fromIntegral n))
            recJumpSearch prev blockSize
                | prev >= n = Nothing
                | arr !! prev < x =
                    recJumpSearch (min (prev + blockSize) (n - 1)) blockSize
                | arr !! prev == x = Just prev
                | otherwise =
                    let recLinearSearch idx
                            | idx >= min (prev + blockSize) (n - 1) = Nothing
                            | arr !! idx == x = Just idx
                            | otherwise = recLinearSearch (idx + 1)
                    in recLinearSearch prev
        in recJumpSearch 0 blockSize

-- Function to read a list of integers from the user
readIntList :: IO [Int]
readIntList = do
    putStrLn "Enter a list of integers separated by spaces:"
    input <- getLine
    let parsedInput = map read $ words input :: [Int]
    return parsedInput

main :: IO ()
main = do
    -- Read the list of integers from the user
    arr <- readIntList

    -- Sort the list
    let sortedArr = sort arr

    -- Read the value to be searched from the user
    putStrLn "Enter the value to search for:"
    value <- readLn :: IO Int

    -- Perform jump search and print the result
    case jumpSearch sortedArr value of
        Just idx -> putStrLn $ "Value found at index: " ++ show idx
        Nothing -> putStrLn "Value not found in the list."
