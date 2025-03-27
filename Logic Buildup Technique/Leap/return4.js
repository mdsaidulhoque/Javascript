function deliveryPrice(weight){
       if (weight < 10){
        return 100;
       }
       else if(weight < 20){
        return 300;
       }
       else if(weight  < 50){
        return 1000;
       }
       else if(weight > 50){
        const extraWeight = weight - 50;
        const extraCost = extraWeight * 100; 
        return 1000 + extraCost;
       };
}
const deliveryFee1 = deliveryPrice(18);
const deliveryFee2 = deliveryPrice(52);
console.log(deliveryFee1);
console.log(deliveryFee2);