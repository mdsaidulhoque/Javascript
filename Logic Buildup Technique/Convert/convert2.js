function inchToFeet(inch){
    const feet = inch / 12;
    const feetNum = parseInt(feet);
    const feetRemaining = inch % 12;
    const result = feetNum + " feet " + feetRemaining + " inch";
    return result;
};

const rakibHeight = inchToFeet(64);
console.log(rakibHeight);