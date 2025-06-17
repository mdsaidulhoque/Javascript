const orderFood = new Promise((resolve,reject) => {

    const foodIsReady = true;

    if(foodIsReady){

        resolve("Food is being delivered");
    }
    else{

        reject("Out of stock");
    }
});

console.log(orderFood);