let arr= [1,2,3,4,5];
arr.splice(1,1);//pehle index se kitna hatana hai including that index
console.log(arr);
arr.splice(1,0,"Banana","Mango")
console.log(arr);


let arr1 = ["ajay", "suresh", "naresh", "himesh", "gopesh"];
let arr2= arr1.slice(2,4)//yha index no 2 aur 4 se kam yani index number 3 ek naye array mein chale jaenge
arr1.sort();
console.log(arr1);
console.log(arr2);

let arr3= [193,2,3,4017,5,6];
// arr3.sort();//aise krne se numbers sort nahi honge using sort function bas string hi hote hai
arr3.sort(function(a,b)
{
    return b-a;//a-b->ascending order mein ho jaega aur b-a se descending order mein ho jaega
})
console.log(arr3);
arr3.forEach((val) =>
{
     console.log(val*val);
})
console.log(arr3);

let arr4= arr3.map((val)=>
{
    return val*val;
})
console.log(arr4);
let arr5= [2,1,3,4,5,7];
let arr6= arr5.filter((val)=>
{
    if(val%2==0) return true;
})
console.log(arr6);
let sum = arr5.reduce((accumulator,val)=>{
    return accumulator+val;
},0)
console.log(sum);
let [a,b,...arr7]=arr5;
console.log(a);
console.log(b,arr7);

//arrays ke values ko shallow copy karane k e liye hum spread pertor a use karte hai
let arr10 = [...arr3];//isme arr3 ki copy ban gayi hai matlab any change in the arr10 wont reflec back to arr3;
console.log(arr10);


let ajay= {
    name: "ajay",
    hobby: "dancing",
    hasGf: false,
    hascrush: false,
}
let gopal= JSON.parse(JSON.stringify(ajay));//ye ho gayi copy 

console.log(gopal);