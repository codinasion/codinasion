function convertTimeTo12Hours(time: string) {
    let splitDate = time.split(":");
    let parsedDate = parseInt(splitDate[0]);
    let ampm = splitDate[2].replace(/[^a-zA-Z]+/g, '');
    let convertedDate = 0;

    if(ampm === "PM") {
        if (parsedDate == 12) {
            convertedDate = 12;
        }
        if (parsedDate > 12) {
            console.log("true");
            convertedDate = parsedDate - 12;
        }
    }
    if(ampm === "AM") {
        if (parsedDate == 12) {
            convertedDate = 0;
        }
        else {
            convertedDate = parsedDate;
        }
    }

    console.log(convertedDate + `:${splitDate[1]}:${splitDate[2]}`);
}

convertTimeTo12Hours("12:05:45PM");
