//freeze()

const adminUser = {
    userName : "Admin",
    email: "admin@example.com",
    role: "superAdmin"
};
Object.freeze(adminUser);
adminUser.userName = "moderator";
delete adminUser.email;
adminUser.password = 123456;
console.log(adminUser);