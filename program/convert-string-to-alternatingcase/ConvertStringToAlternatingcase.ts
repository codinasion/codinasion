const alternatingCase = (str: string) : string => {
    return str.split('').map((c,i) => 
        i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()
    ).join('');   
}

console.log(alternatingCase("hello world"))
