const paymentProcess = new Promise( (resolve,reject) => {

    const amount = 1165;

    if(amount > 0){

        resolve("Payment successful");
    }

    else{

        reject("Payment failed");
    }
});

paymentProcess.then( (result) => {

    console.log(result);
})

  .catch( (error) => {

    console.log(error);
  });