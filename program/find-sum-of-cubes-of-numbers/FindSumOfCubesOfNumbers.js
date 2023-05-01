const sumOfCubes = function (arr) {
    return arr.map( x => x *= x * x ).reduce((a,b)=> a + b)
}