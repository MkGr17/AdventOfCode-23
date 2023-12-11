const fs = require('fs');
const allContents = fs.readFileSync('input.txt', 'utf-8');
let result = 0;

allContents.split(/\r?\n/).forEach((line) => {

    const convertedLine = getConvertedLine(line);
    const value = getValue(convertedLine);
    result += value;

});

console.log(result);

function getValue (line) {

    const first = (line.match(/\d/) || [])[0];
    const last = (line.match(/\d(?=\D*$)/) || [])[0];
    const firstlast = first + '' + last;

    return parseInt(firstlast);

}

function getConvertedLine(line) {

    const numbers = { 'one' : '1' , 'two' : '2' , 'three' : '3', 'four' : '4' , 'five' : '5' ,
                      'six' : '6' , 'seven' : '7' , 'eight' : '8' , 'nine' : '9', 'oneight' : '18',
                      'twone' : '21', 'threeight' : '38', 'fiveight' : '58', 'sevenine' : '79' , 'eightwo' : '82',
                      'eighthree' : '83', 'nineight' : '98'};

    let updated = line.toString();

    for (const number of Object.keys(numbers).reverse()) {
        updated = updated.replaceAll(number,numbers[number]);
    }

    return updated;

}