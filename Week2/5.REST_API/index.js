const express = require("express")
const fs = require("fs"); 
const users = require("./MOCK_DATA.json")

const app=express();

const PORT = 8000;

//middleware
app.use(express.urlencoded({ extended:false }))

app.get('/api/users',(req,res)=> {
    return res.json(users);
});
// first task done, able to render all users data


app.get('/users',(req,res)=>{
    const html = `
    
    <ul>
    ${users
    .map((user) => `<li>${user.first_name || "No name found"}</li>`)
    .join("")}
</ul>

    `;
    res.send(html);
});


app.get("/api/users/:id",(req,res)=>{
    const id =Number( req.params.id ); //user browser me jo id dega usko apna id variable me store karna hai
    const user=users.find((user)=>user.id===id);
    return res.json(user);
});
// second task done , able to show data according to id number

app.post("/api/users",(req,res)=>{

    // todo later create new user 
    const body = req.body;
    users.push({...body, id: users.length+1});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{return res.json({ status: "success",id:users.length });})
});

// task 3 completed, able to create a new user 

app.patch("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const userIndex = users.findIndex((user)=>user.id===id);
    
    if(userIndex===-1)
        return res.status(404).json({error:"User not found"});

    users[userIndex]={...users[userIndex],...req.body};

    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users,null,2),(err)=>{
        if(err){
            return res.status(500).json({ error: "Failed to save changes" });
        }
        return res.json(users[userIndex]);
    });

    
});


app.delete("/api/users/:id",(req,res)=>{

    const id = Number(req.params.id);
    const userIndex = users.findIndex((user)=>user.id===id);
    if (userIndex === -1)
        return res.status(404).json({ error: "User not found"});
    const deleteUser = users.splice(userIndex,1);

    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users,null,2),(err)=>{
        if(err){
            return res.status(500).json({ error: "Failed to save changes" });
        }
        return res.json({ message: "user deleted ", user: deleteUser[0] });
    });


    //todo later delete a user
    
})


// upar jo bhi code hai usi ko short me merge karke ek sath niche likha gya hai dono code exactly same output hi dega 

// jo jo request same route ko use kar raha hai usko eksath merge kar diya gaya hai bas

// app.route("/api/users:id")
// .get((req, res) => {
//     const id = Number(req.params.id); //user browser me jo id dega usko apna id variable me store karna hai
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
// })
// .put((req,res)=>{
//     return res.json({ status: "pending" });
// })
// .patch((req,res)=>{
//     return res.json({ status: "pending" });
// })
// .delete((req,res)=>{
//     return res.json({ status: "pending" });
// })





app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
});