const shop = {

    owner: "Alia",

    address: {

        street: "Kochuket voot er goli",

        city: "ranbir",

        country: "BD"
    },

    products: ["laptop","mic","monitor","keyboard"],

    revenue: 45000,

    isOpen: true,

    isNew: false
}

const shopJSON = JSON.stringify(shop);

const shopObj = JSON.parse(shopJSON);

console.log(shopObj);
