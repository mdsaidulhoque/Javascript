const num = [23,54,75,12,645,753,111,8];
const max = num.reduce((a , b) => {
   return a > b ? a : b;
});
console.log(max);