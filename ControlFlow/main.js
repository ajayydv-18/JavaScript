//if else else if
//ye teeno decide krti hai ki hmra code ka kon sa line execute hoga
//if()-> ye bracket ke andar kuch aisa leta hai jo true ya false ho ya use convert ho ske ya truthy or falsy value ho
//agar ye true hua to ye execute ho jaega wrna aage wala execute hoga

if(12>13)
{
    //ye execute hoga
}
else if(19>13)
{
    //ye execute hoga
}
else{
    //uppar ke dono nahi chle to ye chalega
}

//switch-case 
switch(3){
    case 1:
        console.log("1")
        break;
    case 2:
        console.log("2")
        break;
    case 3:
        console.log("3")
        break;
    default:
        console.log("default");

}
//Early return pattern 
function getVal(val)
{
    if(val>=90) return "A";
    else if(val>=80) return "B";
    else if(val>=70) return "C";
    else return "Fail";
}
console.log(getVal(12));