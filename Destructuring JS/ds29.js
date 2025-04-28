function add([...rest]){
       let sum = 0;
       for (let num of rest){
        sum += num;
       }
       const avg = sum / rest.length;
       return avg
}
const numbers = [2,4,6,8];
const result = add(numbers);
console.log(result);