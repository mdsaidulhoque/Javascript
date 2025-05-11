const number = [34,12,654,2213,546,12,657];
const min = number.reduce((a ,c) => {
    return a < c ? a : c;
});
console.log(min);