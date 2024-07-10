sumOfNaturalNumbers :: Integer -> Integer
sumOfNaturalNumbers n = n * (n + 1) `div` 2

main :: IO ()
main = do
  putStrLn "Enter the value of n:"
  input <- getLine
  let n = read input :: Integer
  let result = sumOfNaturalNumbers n
  putStrLn $ "The sum of the first " ++ show n ++ " natural numbers is: " ++ show result
