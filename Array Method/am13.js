const students = [
    {name: "John",age: 20},
    {name: "Tom",age: 22},
    {name: "Lucy", age: 21}
];
const studentInfo = students.map((student,index,array) => {
    return `${student.name},${index + 1} of ${array.length} students`;
})
console.log(studentInfo);