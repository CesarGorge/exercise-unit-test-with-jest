// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
};

function fromEuroToDollar(euroAmount) {
    return euroAmount * oneEuroIs["USD"];
}

function fromDollarToYen(dollarAmount) {
    return dollarAmount * parseFloat(oneEuroIs['JPY'] / oneEuroIs['USD']).toFixed(2)
}
function roundToFiveDecimals(num) {
    return Math.floor(num * 100000) / 100000;
}
function fromYenToPound(yenAmount) {
    return yenAmount * roundToFiveDecimals(oneEuroIs['GBP'] / oneEuroIs['JPY'])
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
