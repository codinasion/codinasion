type ReversedString<T> = T extends `${infer U}${infer R}` ? `${ReversedString<R>}${U}` : T

function printReverseOfAStringByRecursion(str: string): string {


    if(!str.length) return ""

    return printReverseOfAStringByRecursion(str.substring(1)) + str[0]
}

