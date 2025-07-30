function addTwo (num:number){
    return num+2
}

addTwo(5);

function getUpper(value : string){
    return value.toUpperCase();
}
getUpper("raj");

// arrow function

let loginUser = (name:string,email:string,phone:number)=>{

}

loginUser("raj","rah@g.com",900);


//return type is not solved yet


//number is the return type here
function sum(num1:number,num2:number):number{
    
    return num1+num2;

    //return "hello" //this is also possible , a problem but it should be avoided 
}

const getHello = (s:string):string =>{
    return " ";
}

const heros = ["thor","spiderman","ironman"]

heros.map((hero:string):string =>{
    return `hero is ${hero}`
})


function consoleError(errmsg:string):void{
    console.log(errmsg)
}


function handleError(errmsg : string):never{
    throw new Error(errmsg);
}

// the never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the ProgramUpdateLevel. never also appears when TypeScript determines there's nothing left in a union.


export{}