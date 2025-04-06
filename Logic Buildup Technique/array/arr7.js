function mulOdd(numbers){
    const mulArr = [];
    for (const number of numbers){
         if (number % 2 === 1){
        const mulNumber = number * 2;
        mulArr.push(mulNumber);
    }
  }
  return mulArr;
}

const num = [1,4,5,3,6,8,7,9,2];
const result = mulOdd(num);
console.log(result);