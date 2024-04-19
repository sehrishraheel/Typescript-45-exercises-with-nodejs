// define a function with a rest parameters that accept items argument representing our sandwich
function makeSandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items: ");

    items.forEach(singleItems => console.log(singleItems));

    console.log("\nNow enjoy Sandwiches")

}
//call the functions 3 times with different number of arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", "Butter", "Mayo", "Cheese", "tomato", "lettuce");