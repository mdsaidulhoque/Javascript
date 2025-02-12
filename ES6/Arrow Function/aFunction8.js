const person = {
    name : "sayed",
    greetRegular: function () {
        console.log("Hello, " + this.name);
    }
}
person.greetRegular();
