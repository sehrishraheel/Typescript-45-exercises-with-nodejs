// Exersice 18
// step 1: create an array to store travel destinations

let travelDestination: string[] = ["korea", "paris", "Madina Munawara", "turkey", "china"]

// step 2: print your array in original order
console.log("original order:")
console.log(travelDestination)

//step 3: print your array in alphabetic order without modifyactualing the  list.

console.log("\n Alphabetic order without modifying the actual list")
console.log([...travelDestination].sort())

// STEP 4: show that your array is still in its original order by printing it again.

console.log("\n Showing array is still in its original order")
console.log(travelDestination)

// step 5:print your array in reverse alphabetical order without changing the order of the original list

console.log("\n Reverse Alphabetic order without modifying the actual list")
console.log([...travelDestination].sort().reverse())

// step 6: show that your array is still in its original order by printing it again.

console.log("\n Showing array is still in its original order")
console.log(travelDestination)

// step 7: Reverse the order of your list. print the array to show that its order has changed.
console.log("\nReverse order")
travelDestination.reverse()
console.log(travelDestination)

// step 8: Reverse the order of your list again. print the list to show its back to its original order.

console.log("\nBack to original")
travelDestination.reverse()
console.log(travelDestination)

// step 9: sort your array so its sorted in alphabetical orders. print the arrays to show that its order has been changed.

console.log("\nChanged to Alphabetical order")
travelDestination.sort()
console.log(travelDestination)

// step 10: sort to change your array so its stored in reverse alphabetical order. print the list to show that its order has changed.

console.log("\nChanged to Reverse Alphabetical order")
travelDestination.sort().reverse()
console.log(travelDestination)












