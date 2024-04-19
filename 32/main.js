// array of current users
var current_users = ["zain", "danish", "iqra", "sehrish", "madiha"];
//array of new user
var new_users = ["shaista", "daniyal", "zain", "madiha", "iqra"];
// loop through new_users to check for usernames availibility
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
