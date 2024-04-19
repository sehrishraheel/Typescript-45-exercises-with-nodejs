// array of current users
let current_users = ["zain", "danish", "iqra", "sehrish", "madiha"]
//array of new user
let new_users = ["shaista", "daniyal", "zain", "madiha", "iqra"]

// loop through new_users to check for usernames availibility
new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    if (our_condition){
        console.log( `sorry ${new_one_user} is already taken`)
    }else{
        console.log(`This username ${new_one_user} is available`)
    }
})