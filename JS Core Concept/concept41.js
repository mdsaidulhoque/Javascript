// function result(marks,callback){
//     const marks = {
//         Math: 90,
//         English: 78
//     }
//     callback(marks);
//   };

// function printResult(subjects){
//     console.log(Object.keys(subjects));
// };









function result(Marks,callback){
    const keys = Object.keys(Marks);
    callback(keys);
}

function printResult(Subjects){
   console.log("Subjects Names: ",Subjects);
}

result({Math: 90,English: 78},printResult);