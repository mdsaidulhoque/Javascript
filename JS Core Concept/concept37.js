function greeting(greetingHandler){
      greetingHandler();
}

function morningGreet(){
    console.log("Good Morning");
}

greeting(morningGreet);