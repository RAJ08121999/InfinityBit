let score : number | string =33

score=44
score="55"


type user={
    name : string;
    id: number
}

type Admin = {
    username :string;
    id:number
}

let raj:user|Admin = {name:"raj",id:123}// see here raj can be user as well as an admin also this is possible only by unions

raj={username:"adminRaj",id:2340}//now if raj became an admin it is totally fine


function getDbId(id:number|string){
    console.log(`DB id is ${id}`);
}


//array

const data:Array<number>=[1,2,3,4,5,6]//an array of numbers
const data2:Array<string>=["1","2","3","4","5","6"]//an array of strings
const data3:string[]|number[]=["1","2","3","4","5","6"]//an array of all strings values or all number values its not a mixed value array

const data4:(string|number)[]=["1","2",3,"4","5","6"]//an array of strings values and number values its  a mixed value array






