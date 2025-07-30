// const User = {
//     name:"raj",
//     age:25,
//     email:"rajmd@gmail.com",
//     isActive: true
// }

// function createUser({name:string,isPaid:boolean}){

// }

// createUser({name:"hitesh",isPaid:false});


// function createCourse():{name:string,price:number}
// {
//     return{name: "reactjs", price:4999};
// }

// function createUsers({name:string,isPaid:boolean}){}

// let newUser={name:"ramesh",isPaid:true,email:"letstry@gmail.com"};
// createUsers(newUser)
// //this is the issue we are sending more parameters than required and its not giving error


// type User ={
//     name:string;
//     email:string;
//     isActive:boolean
// }

// function createUserss(user:User): User{
//     return {name: "",email:"",isActive:true}
// }

// createUserss({name: "",email:"",isActive:true})



type User ={
    readonly _id:string //now this id is being a readonly property so no one can manipulate it
    name:string
    email:string
    isActive:boolean
    creditcardDetails?:number //this property is now marked as optional if we pass its value its totally ok and if we don't pass it will not make any error 
}

let myUser: User={
    _id:"2e342",
    name:"lovely",
    email:"ra@.com",
    isActive:true
}

myUser.name="ramesh"
//myUser._id=121
// //so here it is giving me error because we cant manipulate a readonly property



type cardNumber ={
    cardnumber:String
}

type cardDate ={
    carddate:Date
}

type cardDetails = cardNumber & cardDate & {
    cvv:number
}



export{}