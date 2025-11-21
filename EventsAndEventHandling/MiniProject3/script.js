//to jaise ho mein submit par click krta hu page refresh ho jata hai to iso kaise roke?

//hum chahte hai ki user jo bhi data form mein enter kare usko uska card ban ke ek output dikh jaeee;

let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
form.addEventListener("submit",function(dets)
{
    dets.preventDefault();
})
//top botto left right tabhi kaam krta hai jab position absolute ho

//event object jo function mein paramter hot ahai na wahi hota hai

//jispe click hua wahi target hota hai;
//type :- kis tupe ka event hai batata hai