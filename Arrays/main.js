/**
 * Arrays:- dat structures which can hold many values of different data types
 * yaha par indexing kaam krti hai
 * 
 */
let arr=[1, 2, 3, 4]
console.log(arr[0]);//rturn the first elemnt of the array
let arr1 = new Array();
arr[2]=6;//modification in the array
arr.push(10);//add elemnt at the emd of the array
arr.pop();//removes element from the end of the array
arr.shift();//removes element from the beginning of the array
arr.unshift();//adds element in the begining of the array
//splice(kha se value hatani hai, kitni value hatani hai)
arr.splice(2,1);//doosre index se 1 value hata do
//isko add krne ke liye bhi use kar skte hai
//arr.splice(1,0,"red","yellow"); yha hatega kuch bhi nahi balki red aaur yellow index 1 par add ho jaenge

//slice(kha se hatana hai, kha tak hatana hai aur ye naya array deta hai)
let newarr = arr.slice(0,2);//ye 0 se 2-1 tak array nikal ke de dega 
arr.reverse();//ye apke array ko reverse kar deta hai

/////////////higher order functions in arrays///////////
arr.sort(function(a,b){
    return a-b;//agar a-b likha to ascending order me milegi b-a ka matlab hai descending order mein

});
arr.forEach(function(val){
    //ye likha hua code har element of the array ke liy ek baar chalega;
    console.log(val); //saare elements ko print karke de dega koi operation perfoem krna hoga to
    //isme return nahi hota haif
})

let gopu = [1, 2, 3, 4, 5];
//map sirf tab use krna hai jab aapko ek naya array banana hai poorane array ke pbasis par
//jaise hi map dikhe man mein ek balnk array bna liya karo
let newarr1= arr.map(function(val)
{
    return 12;//ab ye function jo jo return karega us new array mein daalte rhna
})
//jab bhi aapko koi ek aisa case dikh jae jha par ek naya array banega aur wo naya array kuch value hold karega on the basis of porana array

/**
 * filter:- poorane array se ek naya array banata hai by fulfuling a ceertian condition that it can include all elemnts of the old array or less than the elements of that array
 * 
 * aap aisa smjh skte ho ki ye filtering ke liye use hota hai
 * 
 * ye true aur false return karta hai agar to true hui to new array mein chali jaegi aur agar false hui to ignore ho jaegi
 */
let arr3 = [1,2,3,4,5,6]
let newarr3  = arr3.filter(function(val)
{
    if(val % 2 == 0) return true;

})
console.log(newarr3);

/**
 * Reduce :- jab saare elemnts of array ko milakar ek single entity lani ho tab um reduce ka use krte hai
 * 
 * accumulator wo banda hota hai jo baar baar chalne par apni porani values ko yaaad rkhta hai
 * 
 * jo 0 hai na wo accumulator ki value jisko set kiya gaya hai
 * 
 * return hone ke baad bhi accumulator mein save hota hai
 * 
 * jab sabhi array mein traverse ho jaega to jo bhi value chal rhi hogi accumulator mein wali final value hogi jo ans mein store hogi
 */
let arr4 = [1,2,3,4,5];
let ans  = arr4.reduce(function(accumulator , val){
    return accumulator + val ;
},0)
console.log(ans);

/**
 * find
 * 
 * apne array jo bhi pehla banda milega jo us condition ko staisfy krta ho wo return kar deta hai
 * 
 * is array function ke andar wo return karna hai jo condition match karegi
 */
let arr6 = [1,2,3,1,4,5,6];
let anss = arr6.find(function()
{
    return val === 1;//pehla 1 milega
})

/**
 * some
 * some return krta hai true ya flase value
 * 
 * every 
 * ye dekta hai ki saare bande condition ko staisfy kar rhe hai ki nahi
 
 */
let marks = [12, 14, 45, 90]
let ansss = marks.some(function()
{
    return anss > 85;
})

/**
 * Destrutring and spread operator
 */
let arr7 = [1,2,3,4,5]
let [a, b, , c] = arr7;//yha a =1 aur b = 2 c=4 ho jaega ->idko destrucing kehte hai

//sprread operatr :- array ko copy karne ke liye use kar skte hai
let arr10 = [1,2,34,5,6]
let arr77 = [...arr10];//yha arr10 ki value arr77 mein copy ho chuki hai 


arr.sort().reverse();//originl array ko alphabetically sort krke revrerse kar dega ye astring mein change kr deta hai bas.sort likh ke nahi sort kar skte no number ke case mein a - b

let countries = ["America", "Japan", "Russia"];
countries = ["india" , ...countries];