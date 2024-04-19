// define a function with a rest parameters that accept items argument representing our sandwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items: ");
    items.forEach(function (singleItems) { return console.log(singleItems); });
    console.log("\nNow enjoy Sandwiches");
}
//call the functions 3 times with different number of arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Butter", "Mayo", "Cheese", "tomato", "lettuce");
