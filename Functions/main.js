/**
 * Functions 
 * 
 * jab bhi hum koi code likhte hai wo turnat chal jata hai agar hum chahte hai wo turant na chale jab hum chahe tabhi chale tab hum use krte hai functions ki
 * 
 * aur jab hume code ke repition ko rokna ho tab bhi hum use krte hai functions ko
 */

//ye function statement hai
function ajay()
{
    console.log("ajay");
}
ajay();
//jab tak aap function ko bulaoge nahi tab tak function chalega nahi

////// 2nd way ///// -> ye function expression hai
let fun = function()
{
    console.log("I am a function created by a variable");
}
fun();

////////arrow function/////////
let arrwFn = () =>
{
    console.log("hellow I am arrow function");
}

//////////parameters and arguements////////
function dance(val) //ye val parameters hai
{
    console.log(`${val} naach rha hai`);
}
dance("ghoda");//yha arguements hote hai
dance("ghadha");
dance("mor");
dance("hiran");


/////////default, rest, spread/////////
function add(v1=0, v2=0) //yha par default value ko set karte hai
{
    console.log(v1 + v2);//NaN
}
add();
/**
 * agar hum arguement nahi pass nahi karemge to default value se hongi which is undefined
 */

// function rest(...val)
function rest(a,b,c,...val) //a=1, b=2, c=2, aur baaki ke arrays mein store ho jaega
{
    console.log(val);
}
rest(1,2,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9);
/**
 * jab arguement kai sare ho to hume utne hi paremeters banane padenge isi se bachne ke liye hum rest opertor(...) ka use karte hai
 * ... ye rest bhi ho skta hai ya phir spread opertaor ho skta hi
 * agr ye arrays or objects mein lage to spread
 * agar ye function ke paramtr space mein use ho to rest oprator hota hai 
 */


/** 
 * return and early return
 * 
 * return :- jaha se aaye ho wahi dale jaoge
 * har function ka kuch return type hota hai wo kuch na kuch return kar rhi hoti hai
 */

/**
 * first class function :- functions ko value ki tarah treat kar skte hai
 */

let fcf = function()
{
    console.log("I am function which is passed as a value to a a variable");
}
function gop(val)
{
    val();
    console.log("yha hum function ko as a argurmnt pass kar skte hai")
}
gop(function()
{
    console.log("hey");
})

/**
 * higher order function : ek aisa function jo ya to ek function return kare ya ek function ko as a parametr accept kare
 */
function hof()
{
    return function()
    {
        console.log("mai ek function ka return product hu")
    }
}
hof()();//yha do bracket isiliye hai ki ek bracket laga hai function ko cha;ane ke liye aur doosra unske andar ke function ko chalen ke liye;


/** 
 * clousure :- ek function jo return kare ek aur function aur return hone wla function hamesha outer function ke variable ko use karega
 */

function clousure(){
    let a =10;
    return function()
    {
        console.log(a);
    }
}
/** 
 * lxical scoping
 */
function abc()
{
    let a = 10;//a ko jaha tak abc hai wha tak use kar skte hai ye hai a ki lexical scoping na hi abc function ke pehle use kar skte hai aur na hi iske baad 
    function def()
    {
        let b = 12;
        function ijk()
        {
            let c = 14;
        }
    }
}

/**
 * iifes(imediately invoked function expressions)
 */
(function()
{

})();

/**
 * hoisting differnces between expressions and declaration
 * function declarations are hoisted but function expressions are not hoisted
 */
k12m(); //it will give output
function k12m()
{

}
abc1(); //cant access abc1 before initialisation agar var se lete to kehta ki it is not a function
let abc1 = function()
{
    console.log("kais eho aap sabhi");
}

/** 
 * aisa function jo kuch bhi nahi return kar rha hai wo return karega undefined
 * pass afunction to other function and excute it
 * pure function jo bahar mein present cheezo ke value ko change na kare 
 * agar change kar det hai impure function hot hau
 */