function avgRec(a, i, n)
{
    if (i == n - 1)
        return a[i];
    
    if (i == 0)
        return ((a[i] + avgRec(a, i + 1, n)) / n);

    return (a[i] + avgRec(a, i + 1, n));
}
 
let arr = [1, 2, 3, 4, 5];
let n = arr.length;
 
console.log(avgRec(arr, 0, n));