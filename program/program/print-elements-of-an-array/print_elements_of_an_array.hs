showArr :: Show a => [a] -> String
showArr [x] = show x
showArr (x:xs) = show x ++ " " ++ showArr xs

printArr :: Show a => [a] -> IO ()
printArr = (putStrLn . showArr)

main :: IO ()
main = do 
    input <- getLine
    let arr = read input :: [Int] 
    printArr arr
