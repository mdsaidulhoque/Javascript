function obj(para = {salary: 50000,taxPercentage:10}){
    return para;
}
const show = obj();
const taxAmount = (show.salary * show.taxPercentage) / 100;
const result = show.salary - taxAmount;
console.log(taxAmount);
console.log(result);