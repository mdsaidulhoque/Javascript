function obj(para = {salary: 50000,taxPercentage:10}){
     return para;
}
const show = obj({salary: 10000,taxPercentage:2});
const taxAmount = (show.salary * show.taxPercentage) / 100;
const result = show.salary - taxAmount;
console.log(taxAmount);
console.log(result);