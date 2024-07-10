import Data.List (delete)

findLargestThree :: Ord a => [a] -> [a]
findLargestThree arr = take 3 (largestThree arr)

largestThree :: Ord a => [a] -> [a]
largestThree [] = []
largestThree [x] = [x]
largestThree [x, y] = [max x y]
largestThree (x:y:z:xs) = let largest = maximumOfThree x y z
                           in largest : largestThree (delete largest (x:y:z:xs))

maximumOfThree :: Ord a => a -> a -> a -> a
maximumOfThree x y z = max x (max y z)

main :: IO ()
main = do
    let arr1 = [10, 4, 3, 50, 23, 90]
    let arr2 = [10, 4, 3, 50, 23, 90, 1, 100, 49]
    putStrLn "Input array 1: "
    print arr1
    putStrLn "Largest three elements: "
    print (findLargestThree arr1)
    putStrLn "Input array 2: "
    print arr2
    putStrLn "Largest three elements: "
    print (findLargestThree arr2)

