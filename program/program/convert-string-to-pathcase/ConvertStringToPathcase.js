function stringToPathCase(str) {
    let toPathcase = str.split('');
    console.log(toPathcase);
    for (let i = 0; i < toPathcase.length; i++) {
        if(toPathcase[i] === "," || toPathcase[i] === "?" || toPathcase[i] === "/") {
            toPathcase[i] = "";
        }
        
        if(toPathcase[i] === " ") {
            console.log("true");
            toPathcase[i] = "/";
        }
    }
    console.log(toPathcase.join(''));
}

stringToPathCase("hello world, good morning");
