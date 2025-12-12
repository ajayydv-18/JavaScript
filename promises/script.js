//js ek synchronous language hai jo line by line execution krti hai aur kisi kaam me jitna bhi samay lge usko kar ke hi aage badhti hai usko chhhodkar doosra kaam nahi krti hai.

//ye ek drawback hai kyuki aisa hone par hamara app freeze ho jaega.

//isiloye js mein asynchronous feture aate hai jaise setTimeout setInterval callbacks promises async await

//ye sab js ko asynchronous language banate hai ye krte ye hai ki y side by side chal rhe hote hai aur jab complete hote hai to js unko print kr deti hai apr iski wajah se sync code ko nahi chodti hai

//promises :- jab hume kahi se data apne program mein jana hota hai to hum promises ka use kre hai 
//ek dabba hai jo jab bhi khulega do cheezein lakar dega 1. reoslve 2. reject aur iske ten state hota hai resolve reject auur pending . jab tak data apke pass aata nahi mtlb data le jate waqt aur data le aatae wqt promise pending stste me hoti hai 

// let prm = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve();
//     },3000) 
// })
// prm.then(()=>
// {
//     console.log("ajay");
// })
// .catch(()=>
// {
//     console.log("data nahi aa paaya ");
    
// })

//.then aur catch se chhutkara paane ke liye we use async await
//api ek url hota hai jha se umko data mil rha hota hai
fetch(`https://randomuser.me/api/`).then((rawData)=>{
    return rawData.json();
}).then((realData)=>{
    //console.log(realData)
})

    async function dat()
    {
        try{
            let rawData = await fetch(`https://randomuser.me/api/`);
        let realData = await rawData.json();
        console.log(realData.results[0].name.first);
        }
        catch(err)
        {
            console.log(err);
            
        }
        
        
    }dat()