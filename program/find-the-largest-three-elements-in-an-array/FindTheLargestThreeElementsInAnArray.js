function largestThreeElements(arr) {
 if(arr.length < 3)
  return 'Input array should have alteast 3 elements'
 
 arr = arr.sort((a,b) => {
    return b-a;
 });
return arr.slice(0,3);
}

console.log(largestThreeElements([10, 4, 3, 50, 23, 90]));
