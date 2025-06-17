const orderFood = new Promise((resolve,reject) => {

    const foodIsReady = false;

    if(foodIsReady){

        resolve("Food is being delivered");
    }
    else{

        reject("Out of stock");
    }
});

orderFood
        
         .then( (message) => {
            console.log(message);
         })

         .catch( (error) => {
            console.log(error);
         });