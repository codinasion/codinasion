function octalToDecimal(n:any){
    const num = n;
    let dec_value = 0;
    let base = 1;
   
    let temp = num;
    while (temp > 0){
        const last_digit = temp % 10;
        temp = Math.floor(temp / 10);
        dec_value += last_digit * base;
   
        base = base * 8;
    }
    return dec_value;
}

function decToHexa(n:any){
    const hexaDeciNum = new Array(100);
    let i = 0;
    while(n != 0){   
        let temp  = 0;
        temp = n % 16;
        
        if (temp < 10){
            hexaDeciNum[i] = temp + 48;
            i++;
        }
        else{
            hexaDeciNum[i] = temp + 87;
            i++;
        }
        n = Math.floor(n / 16);
    }
    let ans = "";
    for(let j = i - 1; j >= 0; j--){
        ans += String.fromCharCode(hexaDeciNum[j]);
    }
    return ans;
}

let hexnum;
let decnum, octnum;

octnum = 12;
     
// Convert Octal to Decimal
decnum = octalToDecimal(octnum);
     
// Convert Decimal to Hexadecimal
hexnum = decToHexa(decnum);
 
console.log("Equivalent Hexadecimal Value :" + hexnum);
 
