module.exports = function reverse (n) {
    let stringNumber = Math.abs(n).toString().split("");
    let finalNumber = "";
    
    for (let i = stringNumber.length - 1; i >= 0; i--) {
        finalNumber += stringNumber[i];
    }
    
    return +finalNumber
}
