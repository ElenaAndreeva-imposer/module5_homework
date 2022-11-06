let arr = [];
let evenElem = arr.filter(function(elem) {
    if (elem % 2 == 0) {
        return true;
    } else {
        return false;
    }
});
let oddElem = arr.filter(function(elem) {
    if (elem % 2 != 0) {
        return true;
    } else {
        return false;
    }
});
let nullElem = arr.filter(function(elem) {
    if (elem == 0) {
        return true;
    } else {
        return false;
    }
});
let otherElem = arr.filter(function(elem) {
    if (typeof elem != "number") {
        return true;
    } else {
        return false;
    }
});
console.log(evenElem);
console.log(oddElem);
console.log(nullElem);
console.log(otherElem);
