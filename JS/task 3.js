function reverseString(str) {
    let splitStr = str.split("");
    let reverseArr = splitStr.reverse();
    let joinArr = reverseArr.join("");
    return joinArr;
}
reverseString("Hello world")


