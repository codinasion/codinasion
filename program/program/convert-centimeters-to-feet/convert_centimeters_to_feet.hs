main :: IO ()
main = do 
   putStrLn "Enter centimeters: " 
   input1 <- getLine
   let centimeters = read input1 :: Float

   let feet = centimeters / 30.48
   putStrLn $ show (feet)
