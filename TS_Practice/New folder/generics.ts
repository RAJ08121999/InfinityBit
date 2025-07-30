const score:Array<number>=[]
const names:Array<string>=[]

function identity1(val:boolean|number):boolean | number{
    return val;
}

//takes boolean|string and returning the same

function identity2(val:any):any{
    return val;
}

//taking any and returning any ...using it is not recommended

function identity3<Type>(value:Type):Type{
    return value
}

//this is the most suitable way to giving and getting the same return type

function identity4<T>(val:T):T{
    return val;
}

//shortcut of the above generic function (line number 16)


interface Bottle{
    brand:string,
    type:number
}

// identity4<Bottle>({})
//we have defined our own type here


function getSearchProduct<T>(product:T[]):T{
    //do some database operations
    const myIndex=3
    return product[myIndex]
}

const getMoreSearchProducts = <T,> (products:T[]):T =>{
    //const some database operations

    const myIndex=6;
    return products[myIndex]
}

// the , after <T,> specifies that it is not any tag of html but a generic type


// function newFunction <T,U>(val1:T, val2:U):object {
//     return{
//         val1,
//         val2
//     }
// }

// newFunction(3,"4")

interface Database{
    connection:string,
    username:string,
    password:string
}

function newFunction <T,U extends Database>(val1:T, val2:U):object {
    return{
        val1,
        val2
    }
}

// newFunction(3,{})




interface Quiz{
    name:string,
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string
}

class Sellable<T>{
    public cart:T[]=[]

    addToCart(products:T){
        this.cart.push(products)
    }
}