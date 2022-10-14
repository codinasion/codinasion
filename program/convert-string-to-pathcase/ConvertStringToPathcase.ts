function stringToPathCase(str: any) {
    let toPathcase = str.split('');
    console.log(toPathcase);
    for (let i = 0; i < toPathcase.length; i++) {
                                          
        // to remove other characters
        if(toPathcase[i] === "," || toPathcase[i] === "?" || toPathcase[i] === "/") {
            toPathcase[i] = "";
        }
        
        // to remove white space
        if(toPathcase[i] === " ") {
            console.log("true");
            toPathcase[i] = "/";
        }
    }
    console.log(toPathcase.join(''));
}

stringToPathCase("hello world, good morning");
