
average :: Fractional a => [a] -> a
average numbers = sum numbers / fromIntegral (length numbers)


main :: IO ()
main = do

  let inputNumbers = [1, 2, 3, 4, 5]


  putStrLn $ "Input Array: " ++ show inputNumbers
  putStrLn $ "Average: " ++ show (average inputNumbers)
