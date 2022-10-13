function checkSpecialCharacter(str: string) {
    let isSpecialCharacter = "false";
    let format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    
    if(format.test(str)) {
        isSpecialCharacter = "true";
    }
    else {
        isSpecialCharacter = "false";
    }

    console.log(isSpecialCharacter);
}

checkSpecialCharacter(">");
