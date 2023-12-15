main :: IO ()
main = do
    putStrLn "Enter the size of the diamond: "
    size <- readLn
    printDiamond size

printDiamond :: Int -> IO ()
printDiamond size
  | size <= 0 = putStrLn "Invalid size. Size should be a positive integer."
  | otherwise = putStr $ unlines $ diamondRows size

diamondRows :: Int -> [String]
diamondRows size = topRows ++ bottomRows
  where
    topRows = map (centerPad size) [1, 3 .. size]
    bottomRows = map (centerPad size) (reverse [1, 3 .. (size - 2)])

centerPad :: Int -> Int -> String
centerPad totalSize rowSize = replicate spaces ' ' ++ replicate rowSize '*' ++ replicate spaces ' '
  where
    spaces = (totalSize - rowSize) `div` 2
