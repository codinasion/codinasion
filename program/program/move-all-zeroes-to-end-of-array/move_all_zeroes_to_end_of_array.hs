moveZeroes :: [Int] -> [Int]
moveZeroes xs = nonZeroes ++ zeroes
  where
    nonZeroes = filter (/= 0) xs
    zeroes = replicate (length xs - length nonZeroes) 0

main :: IO ()
main = do
  let arr = [0, 1, 0, 3, 12]
  putStrLn $ "Original array: " ++ show arr
  
  let result = moveZeroes arr
  
  putStrLn $ "Array after moving zeroes: " ++ show result
