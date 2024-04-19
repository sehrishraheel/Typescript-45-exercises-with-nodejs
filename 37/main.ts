// making a function
function make_shirt (size: string = "Large", printMessage: string = "I love Typescript"){
    console.log(`creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

// calling a function with default values
make_shirt();

// calling a function with medium size and default message
make_shirt("Medium")

//calling a function now with small size with different message
make_shirt("Small", "I love javascript")