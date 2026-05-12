let beginRange = prompt("Enter the beginning of the range");
let endRange = prompt("Enter the end of the range");

function checkDivision(beginRange=1, endRange=100) {
    for (let i = beginRange; i <= endRange; i++) {
        let result = i;
        if (i % 2 === 0) {
            result += " is even";
        }
        if (i % 3 === 0) {
            result += " is a multiple of 3";
        }
        if (i % 10 === 0) {
            result += " is a multiple of 10";
        }
        console.log(result);
    }
}
    checkDivision(beginRange, endRange)