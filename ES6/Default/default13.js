function arr(mul) {
    if (!mul || mul.length === 0) {
        mul = [5, 10, 15];
    }

    let result = [];
    for (let num of mul) {
        result.push(num * 2);
    }
    return result;
}

const newArr = [];
const result = arr(newArr);
console.log(result); // [10, 20, 30]
