function getArea(length,width){

    if(typeof length !== "number"){

        return "Please provide length in Number";
    }

    else if(typeof width !== "number"){

        return "Please provide width in number";
    }

    const area = length * width;

    return area;
}

const Area1 = getArea(4,5);

console.log(Area1);

const Area2 = getArea(5,"six");

console.log(Area2);