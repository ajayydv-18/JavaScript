// callback -> ek function jo doosre function ke parameters mein pass hota hai aur tabhi chalta hai jab koi kaamporra ho jata hai 
//js -> single threaded(ek kaam ko hi ek baar karegi ) and synchronous anguage(line by line xecution hota hai) hoti hai par isko asynchronous and multithreading bana skte hai with the help of setTimeout and setInterval

// function afterDelay(time , cb)
// {
//     setTimeout(function(){
//         cb();
//     } , time)
// }
// afterDelay(2000 , function(){
//     console.log("Call Back Executed");
// })
//jaha bhi function call krte ho wo call back banao aur jha us function ko bane wo wha usko accept karo

// function getUser(userName, cb)
// {
//     console.log("getting user details........")
//     setTimeout(function(){
//         cb({id : 1 , userName : "Ajay"})
//     } , 1000)
// }
// function getUserPosts(id , cb)
// {
//     console.log("getting user posts........");
//     setTimeout(function(){
//         cb(['post1', 'post2', 'post3']);
//     },1000)

// }
// //ajay username ki jo details hoti hai wo function ke andar aa jaati hai 
// getUser('ajay' , function(dets){
//     getUserPosts(dets.id, function(posts){
//         console.log(dets.userName , posts);
//     });
// })

//callback ke andar callback ko hi callback hell kaha jata hai
//jaha function call hoti hai wha cb pass hota hai
//jaha function ban rahi hoti hai wha callback call hota hai aur uske andar pass hota hai data jo wo function la rahi hoti hai 

function loginUser(userName , cb){
    console.log("fetching user Data......")
    setTimeout(()=>{
        cb({userId : 1 , userName : "Ajay"})
    } , 1000)
}
function fetchPermission(userId , cb){
    console.log("fetching user Permissions......")
    setTimeout(()=>{
        cb(["permission" , 'mil' , 'chuka', 'hai']);
    } , 1000)
}
function loadDashboard(arr , cb)
{
    console.log("Loading DashBoard..........")
    setTimeout(()=>{
        cb();
    } , 1000)
}
loginUser("Ajay" , function(dets){
    fetchPermission(dets.userId , function(arr){
        loadDashboard(arr , function(){
            console.log('Dashboard Loaded');
        })
    })
})