function convertTimeTo24Hours(time: string) {
    const splitDate = time.split(":");
    const parsedDate = parseInt(splitDate[0]);
    const ampm = splitDate[2].replace(/[^a-zA-Z]+/g, '');
    let convertedDate = 0;

    if(ampm === "PM") {
        if (parsedDate == 12) {
            convertedDate = 12;
        }
        if (parsedDate < 12) {
            convertedDate = parsedDate + 12;
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

convertTimeTo24Hours("12:05:45AM");
