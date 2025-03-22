function get(n){
   if(n >= 0){
    return n * 2;
   }
   else{
    return n * 3;
   };
};
const result1 = get(2);
const result2 = get(-2);
console.log(result1,result2);