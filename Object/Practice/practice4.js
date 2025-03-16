const phone = {
    brand : "Samsung",
    model : "Galaxy S21",
    price : 85000,
}
const keys = Object.keys(phone);
for (const key of keys){
    console.log(key,phone[key]);
}