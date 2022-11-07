function octalToBinary(octnum)
{
    let i = 0;
    let binary = "";

    while (i<octnum.length) {

        let c=octnum[i];
        switch (c) {
        case '0':
            binary += "000";
            break;
        case '1':
            binary += "1";
            break;
        case '2':
            binary += "010";
            break;
        case '3':
            binary += "011";
            break;
        case '4':
            binary += "100";
            break;
        case '5':
            binary += "101";
            break;
        case '6':
            binary += "110";
            break;
        case '7':
            binary += "111";
            break;
        default:
            document.write( "<br>Invalid Octal Digit "+ octnum[i]);
            break;
        }
        i++;
    }

    return binary;
}


console.log(octalToBinary('12'));