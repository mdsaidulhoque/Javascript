setTimeout( () => {

    console.log("Timeout 1");

        setTimeout( () => {

        console.log("Timeout 2");

              setTimeout( () => {

              console.log("Timeout 3");

             },4000);

     },4000);

},4000);