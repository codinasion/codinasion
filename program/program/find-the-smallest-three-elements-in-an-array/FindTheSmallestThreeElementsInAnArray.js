//Write a JavaScript program to find the smallest three elements in an array
// Input  : arr[] = {10, 4, 3, 50, 23, 90}
// Output : 3 4 10

// Input  : arr[] = {12, 13, 1, 10, 34, 1}
// Output : 1 1 10


let array = [10, 4, 3, 50, 23, 90]

function threeSmallElements(num) {
    num.sort((a,b) => Math.min(a - b))
    return num.slice(0, 3)
}

console.log('the answer is', threeSmallElements(array));