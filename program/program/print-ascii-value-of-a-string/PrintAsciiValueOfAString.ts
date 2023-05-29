function printASCIIofString(str: string){
    str.split('').forEach((c)=>{
        console.log(c.charCodeAt(0));
    });
}

printASCIIofString('ABCd');