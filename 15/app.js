"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list = void 0;
//Exersice 14
let guest_list = ['ali', 'farhan', 'shahmeer', 'shayan'];
exports.guest_list = guest_list;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected sir' + guest_list[i] + ',\n\nwe invited you on a dinner tommorow.\nThank You\n');
}
//Exersice 15
let not_present = 'farhan';
let new_guest = 'shahid afridi';
guest_list[1] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected sir' + guest_list[i] + ',\nwe invited you on a dinner tommorow.\nThank You\n');
}
console.log(`Mr.${not_present} will not coming tommorow.`);
