/**
 * Event and event listener
 * kuch bhi ho jae screen par wo ek event hai
 * jab bhi aap chahte ho ki kuch krne par kuch ho tab hum event and event listener ka use karte hai
 * 
 * event ka matlabb hua koi action hua screen par
 * 
 * kuch screen par ho or aap ko kuch reactions deni ho tab hum use karte hai event handling ka, action ka reaction evemt listener hota hai
 * 
 * *********SYNTAX*****
 * element.addEventlistener("event name", function(){//kya krna hai yaha likhte hai});
 * 
 * *****steps needed *****
 * paragraph o select kar lo pehle
 * action ka socho aur uske reaction ka sochoo 
 */
let h1 = document.querySelector("h1");
h1.addEventListener("click",function()
{
    h1.style.color="orange";
})
h1.addEventListener("dblclick",function()
{
    h1.style.color="red";
})
//removing eventlistener
//element.removeEventListerner("event name",jo function pass kiye ho wo lena hai isko use karne ke liye function ko baahr nikalana padega);

//different event kon ko se hote hi
//click, input
//agar jeevan mein kabhi addEventListener dikh gaya to wha par hum details accept kar skte hai

let input = document.querySelector("input");
input.addEventListener("input",function(evt)
{
    console.log("user typed somthing")
    //jab user delete krta hai to data ki value null set ho jaati hai usko door krne ke liye hum if ka condition lagate hai
    if(evt.data!==null)
    {
        console.log(evt.data);
    }
})//ab kay input kiya wo janana hai to function mein kuch pass kar do

//change :- apka input tab chalta hai jab aapke input select ya textarea mein koi changes aae
let sel = document.querySelector("select");
let heading = document.querySelector("h1");
sel.addEventListener('change' , function(det)
{
    heading.innerHTML = `${det.target.value} device selecteed`;
})

//agar aap chahte ho ki user select na kar pae to hum krte hai userselect= none; slect matlb copy wala selection



