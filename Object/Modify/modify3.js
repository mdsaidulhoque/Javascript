//Seal();

const adminUser = {
    userName : "Admin",
    email: "admin@example.com",
    role: "superAdmin"
};
adminUser.userName = "admin"; //Allowed
delete adminUser.email;  //deleting property is not allowed
adminUser.age = 22;     //adding property is not allowed
console.log(adminUser);


