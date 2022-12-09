
function findContigousSubArray(arr) {
    var min = 0; max = 0;
    for (var i = 0; i < arr.length; i++) {
        min = Math.max(min + arr[i], arr[i])
        max = Math.max(max, min)
    }
    return max;
}

console.log(findContigousSubArray([-2, -3, 4, -1, -2, 1, 5, -3]))