function introduceMyself(){
    const myself= {
        name : "Saidul Hoque",
        age: 21,
        Address: 'Chittagong',
        Height: 5.4,
        favFood: "Biriyani",
    }
    for (const key in myself){
        const value = myself[key];
        console.log(key,value);
    };
};
introduceMyself();