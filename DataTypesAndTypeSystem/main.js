/**
 * Data types -> jab i koi data ko store krte hai to us data ka kuch type hoga uski ko data type kehete hai
 * two types -> primitive{jaha brackets nahi hote, inme ek hi value de skte hai aur inko directly copy kar sket hai(shallow copy)} and refrence{isme bracet use hot hai par inko directly copy nahi krte hai aur multiple value de skte hai} 
 */

/**
 * Primitive data types
 */

//Strings -> jab bhi koi data aisa dikhe to woh string mein count hoga
let a = "ajay"
let b = 'Suressh'
let c = `Mahesh`
//Numbers -> dono integers and float values number me hi count hongi
let d = 1;
let e = 3.14;
//Boolean -> true or flase ko boolena kehte hai
let f = true;
let g = false;
// null -> aapne jan bhujhkar value nahi di hai abhi nahi pata value kya hai future mein uski value aane wali hai
let h = null;
//undefined -> aapne ek variable banaya hai aur usko koi value nahi di hai o by default usko koi milegi whi hoti hai undefined.
// let i = 001; ye error kyu de rha hai

//symbol:- jab hum jaake kuch libraruies import karenge to unme kuch fields hongi aur hum apni kuch filed banaenge agar hamari banayi hui filed usse match ho gayi to uski value change ho jaegi usko door karne ke liye hum symbol ka use krte hai
//unique immmutable values
let uid1 = Symbol("ajay");
let uid2 = Symbol("ajay");
console.log(uid1===uid2); //false

//BigInt -> agar hume ek bahut bada number lena hai to hum big int ka use karte hai number ke last me n lagane se kaam ban jata hau aur jo bhi jodoge usme bhi bigint lagega

let bigInt = 198384848484849494994484848484n;



/**
 * Dynamic typing -> js mein static typing nahi ghoti hai isme hoti hai dynamic typing matlab
 * int a = 1;
 * a = true; aisa aap nahi kar skte par aap aesa js mein kar skte ho
 */

/**
 * typeof 12 -> mumber
 * null -> object
 * arrays -> object
 * NaN -> number (NaN js mein ek failed number operation hai tha ye number ka hi opertaion fail ho gaya to aisa hota hai)
 * NaN === NaN false
 */

/**
 * type coersion -> aapka ek data type doosre mein automatically convert jo jaega
 * "5"+1; yha 1 automaticaly string mein convert ho jaega
 * 
 * 
 * Truthy and falsy value(0, false, "", NaN, undefined, null, document.all) -> 
 * ja waalo ne har value ko truth or false mein tod rkha hai if(12) dena true or false hi hai par apne pass to keyboard hai aur hum kuch bhi de skte hai to yha par truthy or falsy ka use hota hao
 */