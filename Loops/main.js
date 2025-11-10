/**
 * loops :- jaha bhi repetition karana hota hai wahi loop ka use hota hai
 * break and continue
 * for, while, do while, for each, for of:- these 2 for arrays, for in -> for objects
 * 
 * for:- kha se jana hai, kaha tak jana hai, kaise jana hai,
 * 1-50 tak print kro
 * while:- kha se jana hai,kab tak jana hai, kaise jana hai,
 * tab tak print krte rho tab tak hello na bola jae ab ye user par depend krta hai ki kab wo hellow bolega to ye fix nahi hai
 */

for(let i=0; i<101; i++)
{
    console.log(i);
}
// for(start, end, change){codes}
let i=0;
while(i<101)
{
    console.log(i);
    i++;
}
// start while(end) update;

let j=0;
do{
    console.log(j);
    j++;
}
while(j>51);
//iski khasiyat hoti hai ki ye ek baar chalta hi chalta hai 
/**
 * break :- loop se bahar ya loop ko terminate krne ke liye use krte hai .
 * 
 * continue :- to skip a particular iteration in any loop we use continue.
 */
for(let i=0; i<30; i++)
{
    console.log(i);
    if(i===21)
    {
        break;
    }
}
//upar jaise hi 21 aaega loop break ho jaega

for(let i=0; i<20; i++)
{
    if(i===3) continue;
    console.log(i);
}
//yha jaise hi 3 aaega wo iteration hat jaega 