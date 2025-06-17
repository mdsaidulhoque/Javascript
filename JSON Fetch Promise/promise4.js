const getUsers = new Promise( (resolve,reject) => {

    const userAvailable = true;

    const users = ["John","Alice","Bob","Charlie"];

    if(userAvailable){
        
        resolve(users);
    }
    else{
        
        reject("No data availble");
    }
});

getUsers.

         then( (userNames) => {

            console.log(userNames);
         })

         .catch( (error) => {

            console.log(error);
         });