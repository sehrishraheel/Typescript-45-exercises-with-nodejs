// making a function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love Typescript"; }
    console.log("creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on shirt"));
}
// calling a function with default values
make_shirt();
// calling a function with medium size and default message
make_shirt("Medium");
//calling a function now with small size with different message
make_shirt("Small", "I love javascript");
