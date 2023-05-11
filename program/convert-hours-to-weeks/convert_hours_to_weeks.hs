main :: IO ()
main = do 
   putStrLn "Enter hours: " 
   input1 <- getLine
   let hours = read input1 :: Float

   let weeks = hours / 168
   putStrLn $ show (weeks)
