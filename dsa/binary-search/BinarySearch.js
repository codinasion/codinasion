function BinarySearch(arr,target){   //Binary function
    let start = 0;
    let end = arr.length-1;     
    let middle;
    while(start<=end){
        middle = Math.floor((start + end)/2);
        if(arr[middle] === target){
            return middle;
        }
        else if(arr[middle] > target){
            end = middle - 1;
        }
        else{
            start = middle + 1;
        }        
    }
    return -1;          //return -1 if element not found
}

let arr = [10 ,20 ,30 ,40 ,50 ,60 ,70 ,80 ,90 ,100];
let target = 30;
console.log(BinarySearch(arr,target));  //2
