//Exersice 14
let guest_list : string [] = ['ali','farhan','shahmeer','shayan'];
// for(let i=0; i<guest_list.length; i++){
//   console.log('Respected sir ' + guest_list[i]+ ',\n\nwe invited you on a dinner tommorow.\nThank You\n')
// }
//Exersice 15
let not_present : string = 'farhan';
let new_guest : string = 'shahid afridi';
guest_list[1] = new_guest;
// for(let i=0; i<guest_list.length; i++){
 //   console.log('Respected sir' + guest_list[i] + ',\nwe invited you on a dinner tommorow.\nThank You\n')
// }
// console.log(`Mr.${not_present} will not coming tommorow.`)

guest_list.unshift('aariz','ahmed','zain');
// for(let i=0; i<guest_list.length; i++){
 //   console.log('Respected sir' + guest_list[i] + ',\nwe invited you on a dinner tommorow.we found big table so we decided to invite 3 more guest\nThank You\n')
// }
// EXERSICE 17
console.log('\nunfortunatly we cannot arrange big table , only two people allow.')
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`Sorry sir.${remove_guest} you are not invited for dinner.`)
}
 for(let i=0; i<guest_list.length; i++){
    console.log('Respected sir' + guest_list[i] + ',\nyes you are still invited on a dinner tommorow\nThank You\n')
 }
 guest_list.splice(0,2)
 console.log(guest_list)