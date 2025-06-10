const array = [1,2,3,4,2,1,5,5];

// const mySet = new Set(array);

const uniqueArray = [...new Set(array)];

console.log(uniqueArray);