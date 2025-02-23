function product(price,sold){
    if (price == sold){
        console.log("Both values are double equal");
    }
    else{
        console.log("Both values are not double equal");
    }
}

product(1,true);

product(1200,false);

product(0,false);