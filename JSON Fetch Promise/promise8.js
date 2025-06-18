function sendEmail(email){

    const validEmail = ["sohan@31gmailcom","saim@54gmailcom","sudipto@2543gmailcom"];

    const sEmail = new Promise( (resolve,reject) => {

    if(validEmail.includes(email)){

        resolve("Email from Nigerian prince");
    }
    else{

        reject("Lets dance in spam folder");
    }

 });

 sEmail.then( (result) => {

    console.log(result);
 })
   
   .catch( (error) => {

    console.log(error);
   });


}

sendEmail("sohan@31gmailcom");

sendEmail("fake@gmail.com");