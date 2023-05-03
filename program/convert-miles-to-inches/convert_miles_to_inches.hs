main :: IO ()
main = do 
   putStrLn "Enter miles: " 
   input1 <- getLine
   let miles = read input1 :: Float

   let inches = miles * 63360
   putStrLn $ show (inches)
