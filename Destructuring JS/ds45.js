const car = {make: "Toyota ",
    model: "Corolla",
    year: 2020
}
const {year,...rest} = car;
const updatedCar = {...rest,year: 2032};
console.log(updatedCar);