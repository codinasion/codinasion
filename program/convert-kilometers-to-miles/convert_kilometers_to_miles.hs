main :: IO ()
main = do 
   putStrLn "Enter kilometers: " 
   input1 <- getLine
   let kilometers = read input1 :: Float

   let miles = kilometers / 1.609344
   putStrLn $ show (miles)
