let h3 = document.querySelector("h3");
//hum log screen ko window kehte hai to yha par apne website par thodi hi kuch krna hai
window.addEventListener('keydown',function(dets)
{
    if(dets.key === " ") 
        {
            h3.innerHTML = "Space";
        }
        else{
            h3.innerHTML = `${dets.key}`;
        }
    
})