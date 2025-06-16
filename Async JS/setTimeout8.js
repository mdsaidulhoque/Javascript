let check = "I am learning javascrit"

let count = 0;

const setInterID = setInterval( () =>{

    console.log(check);
    count++;

    if(count === 6){

        clearInterval(setInterID);
    }
},2000);