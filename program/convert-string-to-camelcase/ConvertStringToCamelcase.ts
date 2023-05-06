function stringToCamelcase(str: string): string {   
    let i:number = 0;
    const splitstr:string[] = str.split('');
        
    while(i<splitstr.length){
        if(splitstr[i] === ' '){
            splitstr.splice(i,1);
            splitstr[i] = splitstr[i].toUpperCase();
        }
        i++;
    }
    return splitstr.join('');
}


const str:string = "hello world";            
console.log(stringToCamelcase(str));    // "helloWorld"
