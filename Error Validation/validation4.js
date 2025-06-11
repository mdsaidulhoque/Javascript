const item1 = {name: "Ice Cream",

    price: 80

}

function getPrice1(product){

    const Price = product.price;

    return Price;
}

const result1 = getPrice1(item1);

console.log("Before Validation: ",result1);


//Validation is


const item = {name: "Ice Cream",

    price: 120

}

function getPrice(product){

    if(typeof product !== "object"){

        return "Please provide an Object";

    }

    const Price = product.price;

    return Price;

}

const result = getPrice(item);

console.log("After Valiadation: ", result);

const result2 = getPrice(90);

console.log(result2);

