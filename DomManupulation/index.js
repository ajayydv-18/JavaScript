/**
 * Dom -> document object model {webpage mein hum jo bhi dekhte hai sab dom ka part hota hai har ek cheez ek node hoti hai }
 * 
 * poora webpage ek tree jaise structure main rehta hai jisme nodes hote hai
 * 
 * Dom manupulation -> js se hum dom mein kuch change laskte hai usi ko dom amupulation kha jata hai
 * 
 * 
 * kisi cheez ko chnage krne se pehle usko slect krna hota hai
 * 
 * ********************** SELECTIONS *********************
 * 1.get elemnt by id name ->
 *
 * 
 * 
 * 
 * 2.get elements by class name
 * 3.query selector
 * 4.query selector all
 */
// let abcd= document.getElementById("abcd");
// console.log(abcd);//agar as a tag dikhe the u can use 
// console.dir(abcd);//jitne bhi bts honge aapko dikhne lagenege
// let heading= document.getElementsByClassName("abcd");
// console.log(heading);//ye arrays jaisa hota hai par arrays nahi hota hai
// let gopu = document.querySelector("h1");//wha to do h1 select kon sa hoga to jo pehla h1 hoga whi select hoga 
// console.log(gopu);
// let gopua = document.querySelectorAll("h1");//wha to do h1 select kon sa hoga to jitna bhi h1 hai saara select ho jaega array jaisa kuch milega

// let h1= document.querySelector("h1");
// h1.innerHTML="hehe kaise ho";//ye html daalta hai
// h1.textContent="main badhiya hu";//ye aur neeche wala bas text badhalta hai
// h1.innerText="tum batao";
// h1.innerHTML="<i>hey</i>"
//innertext aur innerContent mein yahi difference hota hai ki text content jo hidden hota hai usko bhi change kar skta hai aur fast hota hai

/***
 * attribute manupulation:- attribute ko change krna using js
 * 
 * attribute:- tag ko chhodkar kuch aur dikh jae to wo attribute hota hai
 * 
 * a.setAttribute(kon si value change kar rhe ho, change akr ke kya rkhan chahte ho)
 * 
 **************set attributes************************

 * let a= document.querySelector("a");
 *  a.href="https://www.google.com";
 *  a.setAttribute("href","https://www.sheryians.com");
 * 
 **************get attribute**************************

 * let a= document.querySelector("a");
 *  a.getAttribute("href")//is attribute ki value hme mil jaegai
 * 
 * ************remove attribute************************
 * a.removeattribute("href");//href delete ho jaegi
 */


/** 
 * dynamic dom manupulation
 * create element
 * append child :- body ke andar last elemnt ye hoga
 * prepend child :- body ke andar pehla element ye hoga
 * remove child
 */
// let h1= document.createElement("h1");
// h1.textContent="hello ji kaise ho aap sabhi";
// // document.querySelector("body").append(h1);
// // document.querySelector("body").prepend(h1);
// h1.remove();//ye karne se h1 delete ho jaat hai


/**
 * Js se css badalana
 * 
 * let h1 = document.querySelector("h1");
 *  h1.style.color="red";
 * 
 * addig class to any element
 * h1.classList.add("ajay")
 * 
 * agar class lagi hui hai aur usko hume hatani hai to kaise hataoge
 * h1.classlist.remove("jo class remove karni hai usk anaam")
 * 
 * ek hota hai toggle :- lagi hoti hai to hata deta hai aur hata hota hai to laga deta hai
 */
let h1 = document.querySelector("h1");
h1.classList.add("ajay");
h1.classList.toggle("ajay");//class lagio thi to isne hata diya




