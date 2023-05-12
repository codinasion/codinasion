g :: Integer -> Integer -> Integer
g x 0 = x
g x y = g y (x `mod` y)

main = do
    let n = 12
    let m = 18

    print $ g n m