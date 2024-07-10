const ImplementTernarySearch=(array,value)=>{
    let l=0;
    let r=array.length-1;
    while(l<=r){
        let mid1=Math.floor(l+(r-l)/3);
        let mid2=Math.floor(r-(r-l)/3);
        if(array[mid1]==value){
            return mid1;
        }
        if(array[mid2]==value){
            return mid2;
        }
        if(value<array[mid1]){
            r=mid1-1;
        }else if(value>array[mid2]){
            l=mid2+1;
        }else{
            l=mid1+1;
            r=mid2-1;
        }
    }
}

// For Example
const array=[1,2,3,4,5,6,7,8,9,10];
const value=5;
const result=ImplementTernarySearch(array,value);
if(result){
    console.log("Value Found at index : "+result);
}
else{
    console.log("Value Not Found");
}