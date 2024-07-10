main :: IO ()
main = do
    putStrLn "Enter two numbers separated by space:"
    input <- getLine
    let [num1, num2] = map read $ words input
    putStrLn $ "Before swapping: num1 = " ++ show num1 ++ ", num2 = " ++ show num2
    let (num1', num2') = swapNumbers num1 num2
    putStrLn $ "After swapping: num1 = " ++ show num1' ++ ", num2 = " ++ show num2'

swapNumbers :: Int -> Int -> (Int, Int)
swapNumbers num1 num2 = (num2, num1)
