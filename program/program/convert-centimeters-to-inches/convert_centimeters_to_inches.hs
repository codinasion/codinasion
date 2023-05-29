main :: IO ()
main = do 
   putStrLn "Enter centimeters: " 
   input1 <- getLine
   let centimeters = read input1 :: Float

   let inches = centimeters / 2.54
   putStrLn $ show (inches)
