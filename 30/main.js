// creating a array
var userNames = ["Sehrish", "Raheel", "Ahmed", "Raza", "Admin"];
// using forEach loop on array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
