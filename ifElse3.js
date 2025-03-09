const price = 4500;
if (price > 6000){
    const discount = price/100 * 15;
    const pay = price - discount;
    console.log(pay);
}
else if(price > 3000) {
     const discount = price/100 * 5;
     const pay = price - discount;
     console.log(pay);
}
else{
    console.log(price);
}



const age = 68;
const aPrice = 600;
if (age < 12){
   const aDiscount = aPrice/100 * 100;
   const aPay = aPrice - aDiscount;
   console.log(aPay);
}
else if(age > 60){
    const aDiscount = aPrice/100 * 50;
    const aPay = aPrice - aDiscount;
    console.log(aPay);
}
else{
    console.log(aPrice);
}




const accountBalanceOfMyFriend = 6500;
if(accountBalanceOfMyFriend < 1000){
    console.log("Deposit some money");
}
else if(accountBalanceOfMyFriend < 5000){
    console.log("Enjoy your life to the fullest");
}
else{
    console.log("Take care of me")
}




