//OOPs -> object oriented programming 
//hum apna poore code ko classes objects aur functions mein bant dete hai 
//jab bhi koi chnage krna hota hai us particular section par jaate jhai aur changekar dete hai

//kisi ek particuar cheez ko uske saare details ko ek jagah rkna object ki madad se kar skte hai 

const student1 = {
    name: "Ajay",
    rollno: 12,
    percentage: 94,
}
const student2 = {
    name: "Gopal",
    rollno: 21,
    percentage: 94,
}
// yha object ka naam change ho rha hai aur uske andar ki details chnage ho rhi hai to apne code ko chhota krn ke liye hum concelpt jaate hai classes ka 

//classes ek blueprint(dhancha) hoti hai jiske andar se same properties waale object nikal rhe hote hai unki key ski values differnt ho skti hai 

class Human{
    constructor(hands , legs , eyes){
        this.hands = hands;//blank objct ke hands mein 2daal do
        this.legs = legs;//blank objct ke legs mein 2daal do
        this.eyes = eyes;//blank objct ke eyes mein 2daal do
        this.canBreathe = true;
    }
     drink(){
        console.log("he can drink");
        
     }
     walk(){
        console.log("can walk");
        
     }
    
}
let ajay = new Human(10 , 12 , 14);
let ash = new Human(1 , 2 , 3);
// console.log(ajay);
// console.log(ash);

//ajay ek object hai jiske andar classes ki properties aa jaengi
 

//new ka matalab ek blank object banao aur class ko call kr do uski properties set krne ke liye
//class ka naam capital letter se start karoge 
//class ke pass ek constructor hoga hi hoga 
//jab tum class ko call karoge constructor automatically call ho jata hai 
//constructir ek function hota hai jo objects ko properties dene me help krta hai 

//this kya hai ? 
//this kuch bhi ho skta hai wo depend krt hai ki wow likha kha gaya hai 
//global -> this ki value window 
//function -> window hoti hai
//object -> this ki value wo obkect hota hai 
//object ke andar function ke andar this ki value wo object hota hai 
//object ke andar es6 function ke nadar this ki value window hoti hai
//es5 fn ke andar es5 function kisi objct ke amdar -> window
//es5 fn ke andar es6 function kisi objct ke amdar -> object


//protoype:- ek shared memeory agar ki function ko as a prototype se banate hai to wo sabhi object ke prototype mein uplabdh hota hai 

//aise normally bhi function banaoge tabh bhi whai jaega

//kisi function ke andar this ki value hoti hai window agar hum chahte hai ki wo window na ho kisi object ko point kre to call , bind , apply ka use krte hai 

function Ajay(a ,b, c)
{
    console.log(this);
    console.log(a,b,c);
}

Ajay.call(student1 , 1, 2, 3);
//yha par aise hi pass kar dete hai
Ajay.apply(student2 , [1,2,3,4])//yaha parameters ko array se pass krte hau 
//upar ke dono fun ko run bhi kara dete hai 
Ajay.bind(student1 , 1,2,3)
//ye naya function bana ke deta hai
