const fs = require('fs');
const allContents = fs.readFileSync('input.txt', 'utf-8');
let result = 0;

allContents.split(/\r?\n/).forEach((line) => {

    const value = getValue(line);
    result += value;

});

console.log(result);

function getValue (line) {

    const first = (line.match(/\d/) || [])[0];
    const last = (line.match(/\d(?=\D*$)/) || [])[0];
    const firstlast = first + '' + last;

    return parseInt(firstlast);

}