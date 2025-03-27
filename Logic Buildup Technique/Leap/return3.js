function tax(incomeAmount){
     if(incomeAmount <= 50000){
        return incomeAmount/100 * 10;
     }
     else if(incomeAmount <= 100000){
        return incomeAmount/100 * 20;
     }
     else if(incomeAmount <= 200000){
        return incomeAmount/100 * 30;
     }
     else if(incomeAmount > 200000) {
        return incomeAmount/100 * 40;
     }
}
const count1 = tax(150000)
const count2 = tax(250000);
console.log(count1);
console.log(count2);