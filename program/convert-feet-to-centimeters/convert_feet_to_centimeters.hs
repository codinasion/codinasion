main :: IO ()
main = do 
   putStrLn "Enter feet: " 
   input1 <- getLine
   let feet = read input1 :: Float

   let centimeters = feet * 30.48
   putStrLn $ show (centimeters)
