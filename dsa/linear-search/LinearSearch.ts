function linearSearch(arr:Number[],target:Number):Number{   //linear search function
    let i:number = 0;                      
    while(i<arr.length){                //returns element index
        if(arr[i] === target){
            return i;
        }
        i++;
    }
    return -1;          //returns -1 if element not found
}

const arr:Number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target:Number = 5;
console.log(linearSearch(arr,target));     // 4
