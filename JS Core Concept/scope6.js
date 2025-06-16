//function scope,local scope

function add(a,b){

    const total = a + b;

    console.log(total);
}

add(4,6);

//trying to access function parameter from outside

console.log(a,b);