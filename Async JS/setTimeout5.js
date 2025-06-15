let num = 0;

const interValId =  setInterval( () => {

    num++;

    console.log(num);

    if(num === 5){

        clearInterval(interValId);
    }
},3000);