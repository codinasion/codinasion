function stringToCamelcase(str: string): string {   
    let i:number = 0;
    let splitstr:string[] = str.split('');
        
    while(i<splitstr.length){
        if(splitstr[i] === ' '){
            splitstr.splice(i,1);
            splitstr[i] = splitstr[i].toUpperCase();
        }
        i++;
    }
    return splitstr.join('');
}


let str:string = "hello world";            
console.log(stringToCamelcase(str));    // "helloWorld"
