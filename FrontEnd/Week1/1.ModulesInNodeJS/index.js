// const math = require("./math");

// hum log directly dono function ko v import kar sakte hai math module se

const {add,sub}=require("./math")

//agar dono function ko directly import kiya gaya ho to . operator ka jarurat nahi hoga e.g

console.log("value is ",sub(9,5))


// console.log(math.add(2, 4));

// math.js se 2 functions export kiye hai isiliye kisi particular function ko use karne k liye module dot(.) function name ko use karte hai 

// agar key value pairs export kiya gaya hai to keyname ko use karke function call hoga e.g math.addFn(4,76)