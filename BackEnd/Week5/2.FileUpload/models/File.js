const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
    },
    tags:{
        type:String,
    },
    email:{
        type:String,
        required:true,
    }
});

//post middleware
// db me entry create karne k turant bad jo kam karna hai uske liye post middleware use hota hai aur entry se just phle jo kam karna hota hai uske liye pre middleware use hota hai

fileSchema.post("save",async function(doc) {
    try{
        console.log(doc)
        //db me jo bhi entry create ho raha hai wahi hai doc

        //transporter
        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            },
        });

        //send mail
        let info = await transporter.sendMail({
            from:`mdraj test purpose`,
            to:doc.email,
            subject:"new file uploaded on cloudinary",
            html:`<h2>Namaskaram</h2><p>File uploaded successfully View here:<a href="${doc.imageUrl}">${doc.imageUrl}</a></p>`,
        })
        console.log("Info",info);
    }
    catch(error){
        console.log(error);
    }
})
const File = mongoose.model("File",fileSchema);
module.exports = File;