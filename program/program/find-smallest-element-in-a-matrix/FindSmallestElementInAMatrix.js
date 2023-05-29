const smallestElementInMatrix = (matrix) =>{
let small = matrix[0][0];
 matrix.forEach(arr =>{
    if(small > Math.min(...arr)){
        small = Math.min(...arr)
    }
})
return small;
}


console.log(smallestElementInMatrix([[1,2,3],[4,5,6],[7,8,9]]))
