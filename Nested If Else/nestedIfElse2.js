const guestInMyHouse = true;
const wannaHaveTea = true;
const wannaHaveBiscuit = false;
if (guestInMyHouse == true){
    if (wannaHaveTea == true){
        if(wannaHaveBiscuit == true){
            console.log("Enjoy tea and biscuit");
        }
        else{
            console.log("Enjoy tea");
        }
    }
    else{
        console.log("Sit down and watch movie in TV");
    }
}
else{
    console.log("Get some sleep");
}