/**
 * keywords vs words
 
 * jo bhi words se kuch ho js mein ya wo compiler ko kuch instrut kare krne ko wo keywords hoti hai aur jiska koi matlab nahi hota that are known as words
 
 * agar hme data ko store krna hai t hum use krte hai variable ko var let const var poorana hot ahai isko utna use me nahi lete hai let aur const ka jayada use krtr hai jab bhi data ki value ko aage jake change krna hai to hum let use krte hai aur agar data ki value ko as it is rakhna hai then we use const 

 * var se bana hua variable apne aap ko window mein add krta hai -> ye functional scope hota hai
 * aap fir se declkare kar skte ho aur error nahi aeega same name se
 * 

 */

//creation of variables
a=8;
var d; //declaration
let e; //declaration and initialisation(pehli value dena initialisation kehlata hai)
// const f; -> aap aisa kuch nahi kar skte ho
var a = 10;
let b = 12; // -> block scoped hota hai
const c = 14; // agar chahte hai ki ye badle na tab hum const ka use krte hai

var name ="ajay";
var name = "shrey"; //koi error nahi aaya let mein error aaega



//Scope  -> variables ko kha tak access kar skte hai whi hota hai uska scope
/**
 * global -> kisi bhi {} ke andar na ho ye code mein har jagah use ho skta hai.
 * block -> {} iske block bolte hai
 * functionsl -> bas function ke andar hi use ho skta hai
 */

// var a =10; //ye hai global scoped
// let d =13;
// function ajay()
// {
//     var b = 12; //ye hai functional scoped
//     if (b===1)
//     {
//         let c = 13; //ye hai block scoped
//         d = c;      // d tha global 
//         var e = 15;
//     }
//     e=17;
// }


/**
 * Reassignment and Redeclaration 
 * var -> reassign bhi kar skte hai redeclare bhi kar skte hai
 * let -> reassign bhi kar skte hai redeclare nahi kar skte hai
 * const -> reassign bhi nhi kar skte hai redeclare nahi kar skte hai  objects ke case mein hum uske properties ko change kar skte hai
 */

/** 
 * Temporal dead zone (TDZ) 
 * varibale agar let aur const se declare kar rhe ho to us variable ke declaration se pehle jitna space/region hai jha us variable ko access nahi kiya ja skta hai wo region bhi tdz kehlata hai
 * var aur functions declated with function keyword can be accesesed before the code of its declaration;
 */


/**
 * hoisting -> jab bhi hum koi variable banate hai to uska declare wala part upar chala jata hai aur initilaisation wala part wahi reh jata hai yahi hoisting hot ahai. to const mein kaise hoga ???
 * console.log(ajay); //cannot access a before declaratiom(declare ho chuka hot ahai )nahi likhta ye likha hai before initialisation
   const ajay = 13; 
 */
