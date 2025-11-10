/**
 * Objects :- hum objects tab banate hai jab hume ek entity ke baare mein bahut kuch likhna hai
 * 
 * key value pair
 * 
 * destrucing and nesting
 * let {lng, lat}=user.address.location -> yha se lng aur lat nikal lo
 */

let ajay= {
    name: "ajay",
    hobby: "dancing",
    hasGf: false,
    hascrush: false,
}
//in dono tareeko se hum objects ke elmemnt ko access kar skte hai
console.log(ajay.name);
console.log(ajay["name"]);

//kyu do naotation hote hai
/**
 * ajay.name agar likhte ho to name wali property obj mein doondhi jaegi
 */

let aa= "name";
//ajay.aa -> ye undefined dega aa ke jagah name nahi aaege
//ajay[aa] -> ye aapko sahi ans dega aa ke andar name wali property aa jaegi

//looping in the object
//for in looping
for(let key in ajay)
{
    console.log(key);
    //console.log(ajay.key);//ye nahi kar skte ho upar dekho ghandhe
    console.log(ajay[key]);
}
//Object.key(ajay) -> ajay ke saare keys ko arrays mein daal det hai
//object.entries(ajay) -> arrays of array banta hai

let gopal = {...ajay};//for copying objects 
//for deep copy jisse nested objects ka bhi kaam ho jae we use Json.stringfy(ajay) ->poore ko string mein convert kar degi aur string easy copable hota hai
//doobar aobject mein convert krne ke liye we use JSON.parse(newobj)
//optional cahining -> agr koi propery object mein exist nahi karti hai aur hum usko bhul rhe ho to wo error dikhati hai agar hum chhte hai ki wo error na de kuchh aur dede par error na de tab
//obj?.addresses?.city -> agar nahi hogi to undefine de dega

//computed properties :- 
let role = "admin";
// agar object mein is role naam ki property banani hai to hum aise likhte hhai
//[role] : "harsh"
