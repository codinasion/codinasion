fib :: Integer -> Integer
fib 0 = 0
fib 1 = 1
fib x = fib (x - 1) + fib (x - 2)

main = do
    let n = 5
    let s = [fib x | x <- [0 .. n - 1]]

    putStrLn . unwords . map show $ s