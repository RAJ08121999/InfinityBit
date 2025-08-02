

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

// module.exports=add; isse hum sirf single function ko export kar sakte hai

// module.exports={add,sub};
// multiple functions ko export karne k liye usko object bana k export karte hai

module.exports={
    addFn:add,
    subFn:sub
}

// aise key value pairs bana k bhi export kar sakte hai


// exports module ko use karke bhi export kiya ja sakta hai anonymous functions bana k

// exports.add=(a,b)=> a+b;
// exports.sub=(a,b)=> a-b;