const shoppingCart = {

    product: ["Pen","Book","Scale"],

    totalPrice : 390,

    userDetails: {

        name: "Saim",

        id: 1212,

        contact: "Email@"
    }
}

const cartJSON = JSON.stringify(shoppingCart);

console.log(cartJSON);