// define the function to show magician names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// define an array of magician names
var magician_names = ["Harry porter", "sehar", "goga"];
// making a copy of original array through .slice() function
var copy_magician_names = magician_names.slice();
//modify the copied array to include "The Great" with their names
var copy_great_magicians = make_great(copy_magician_names);
// show both arrays original and copy
//original
console.log("original Array\n");
show_magicians(magician_names);
//copied
console.log("\ncopied Array\n");
show_magicians(copy_great_magicians);
