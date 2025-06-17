//Lexical Scope

function outerFunction(){

    let outerVar = "Hello I am from outer function";

    function innerfunction(){

        console.log(outerVar);
    }
    innerfunction();
}

outerFunction();