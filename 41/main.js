// define a function to print each magician name from array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// define an array containing magician name
var magician_names = ["Harry poter", "goga", "sehar", "Raheel"];
//call the function to print each magician name
show_magicians(magician_names);
