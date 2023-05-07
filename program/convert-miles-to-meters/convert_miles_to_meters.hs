main :: IO ()
main = do 
   putStrLn "Enter miles: " 
   input1 <- getLine
   let miles = read input1 :: Float

   let meters = miles * 1609.344
   putStrLn $ show (meters)
