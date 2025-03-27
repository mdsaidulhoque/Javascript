function result(marks){
    if(marks  >= 80){
        return "A";
    }
    else if(marks >= 70){
        return "B";
    }
    else if(marks >= 60){
        return "c";
    }
    else if(marks >= 50){
        return "D";
    }
    else{
        return "F";
    }
}
const Math = result(76);
console.log(Math);