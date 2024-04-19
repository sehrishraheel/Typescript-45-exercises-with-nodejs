//Exersice 14
 let guest_list : string [] = ['ali','farhan','shahmeer','shayan'];
// for(let i=0; i<guest_list.length; i++){
//   console.log('Respected sir ' + guest_list[i]+ ',\n\nwe invited you on a dinner tommorow.\nThank You\n')
// }
//Exersice 15
var not_present : string = 'farhan';
var new_guest : string = 'shahid afridi';
guest_list[1] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('Respected sir' + guest_list[i] + ',\nwe invited you on a dinner tommorow.\nThank You\n')
}
console.log(`Mr.${not_present} will not coming tommorow.`)

guest_list.unshift('aariz','ahmed','zain');
for(let i=0; i<guest_list.length; i++){
    console.log('Respected sir' + guest_list[i] + ',\nwe invited you on a dinner tommorow.we found big table so we decided to invite 3 more guest\nThank You\n')
}
