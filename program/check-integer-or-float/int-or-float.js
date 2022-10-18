checkNum=(x)=>{
    //check if value is of type number
    if(typeof(x)==="number"){
       // check if number is an int
        if (Number.isInteger(x)){
            console.log("integer")
        }
        //if number is float
        else{
            console.log("float")
        }
    }
    //if value is not a number
    else{
        console.log(`${x} is not a number`)
    }
    
}
//checkNum();  --function call