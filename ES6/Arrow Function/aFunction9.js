const person = {
    name : "sayed",
    greetRegular: function () {
        console.log("Hello, " + this.name);
    },
    greetArrow: () => {
       console.log("Hello, " + this.name);
    }
}
person.greetRegular();
person.greetArrow();
