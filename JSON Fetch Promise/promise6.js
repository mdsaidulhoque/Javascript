const userData = new Promise( (resolve,reject) => {

    const userAvailable = true;

    const users = ["John","Charlie","Javier"];

    if(userAvailable){

        resolve(users);
    }

    else{

        reject("No data available");
    }
});


userData.then( (result) => {

    console.log(result);
})
  .catch( (error) => {
     
    console.log(error);
  });