//const user:(string | number )[]=[3,"md",1];
// here we can add numbers or strings in this array at any position but we want that number comes first and strings comes later


let user:[string,number,boolean]

user=["md",122,true]//so here its a strict pattern that first strings then number and at last boolean will come

let rgb:[number,number,number] = [255,213,123]//this tuple will accept only 3 values and it should be numbers only

// In TypeScript, a tuple is a special type of array that represents a fixed-length, ordered collection of elements, where each element at a specific index has a predetermined type.

type User = [number,string]

const newUser :User=[123,"231"];




export{}