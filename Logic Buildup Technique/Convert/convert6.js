function minuteToSecond(second){
    const minute = second / 60;
    return minute;
}
const hour = minuteToSecond(600);
console.log(hour);