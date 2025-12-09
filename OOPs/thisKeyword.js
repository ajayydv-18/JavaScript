let ajay = {
    name: "ajay",
    rollno: 12,
    fun: function(){
        console.log(this.name); //usi object ko point kar rha hai 
    },
    gun: ()=>{
        console.log(this);//ye window ko point kar rha hai 
    }
}
ajay.fun();
ajay.gun();
//global mein koi function ho ya simply this ko print kr rhe hai to ans window hota hai
//addEnevetListener ke andar this ki value wahi hoti jiapr wo laga hota hai 
