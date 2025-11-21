//yha par file choose krne wala cheez apne aap se banenge
//click hum apne button par karenge aur click wo hoga

let btn = document.querySelector("button");
let fileinp = document.querySelector("input");
btn.addEventListener('click',function()
{
    fileinp.click();
    //click hum button par kare aur click input wale chose file par o iske liye use krte hai
    //file ka naam bhi display hona chahiye
})
fileinp.addEventListener('change',function(dets){
    btn.innerHTML= dets.target?.files[0].name ;
    //yha par hum optional chaining laga dete hai jab cancel hot ahai tab erro rdikhat ahai agar aisa kuch hai to access karo ya to nahi kro.
})