function add(n1,n2,...rest){
        let sum = 0;
        for(let num of rest){
            sum += num;
        }
        return sum;
    }
const result = add(1,3,5,7,9);
console.log(result);