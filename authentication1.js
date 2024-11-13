const express=require("express");
const jwt=require("jsonwebtoken");
const jwtpassword="1234567890";

const app=express();

const ALL_Users=[
    {
        username:"nithinbairu08@gmail.com",
        password:"Nithin@8",
        name:"Nithin",
},
{
    username:"nithinbairu0806@gmail.com",
    password:"Nithin@86",
    name:"Nithin1",
},
{
    
    username:"nithinbairu080602@gmail.com",
    password:"Nithin@862",
    name:"Nithin2",
    
}];

function userexits(username,password){
    const user = ALL_Users.find(user => user.username === username);
    
    if (user) {
        // If user exists, check the password
        if (user.password === password) {
            return true;
        } else {
            return false
        }
    } else {
        return false
    }

}
app.post('/sign-up', (req,res) =>{
    const username=req.body.username;
    const password=req.body.password;

    if(!userexits(username,password)){
        res.status(403).json({
            msg:"User Doesn't Exits"
        })
    }

    var token=jwt.sign({username:username},"sssssh!");
    return res.json({
        token,
    })
})

// app.get('/sign-up', (req,res)=>{
//     const token=req.header.authorization;
//     try{
//         const decoded=jwt.verify(token,jwtpassword);
//         const username=decoded.username;
//     }
// })
app.listen(3000);