 //Revise
 //Map
 const numbers1 = [2,4,6,8];
 const result1 = numbers1.map(num => num * 2);
 console.log(result1);

const friends = ["Tom","John","Oliver"]
const lengths = friends.map(frnd => frnd.length);
console.log(lengths);

//forEach

const numbers = [1,2,3,4,5];
const check = numbers.forEach(n => console.log(n));
console.log(check);

//Filter

 const heigth1 = [5.1,6.2,5.1,6.1,4.9];
 const selected1 = heigth1.filter(p => p > 5.5);
 console.log(selected1);


 //Find

 const heigth2 = [5.1,6.2,5.1,6.1,4.9];
 const selected2 = heigth2.find(p => p > 5.5);
 console.log(selected2);


 //FindIndex

 const heigth3 = [5.1,6.2,5.1,6.1,4.9];
 const selected3 = heigth3.findIndex(p => p > 5.5);
 console.log(selected3);

  const heigth4 = [5.1,6.2,5.1,6.1,4.9];
 const selected4 = heigth4.findIndex(p => p > 7.5);
 console.log(selected4);
