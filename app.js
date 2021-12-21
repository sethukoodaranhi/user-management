const express=require('express');
const dotenv=require('dotenv')
const bodyparser=require('body-parser')
const connectdb=require('./src/database/connection')
const app=express();

dotenv.config({path:'config.env'})
const PORT=process.env.PORT||8080

app.set("view engine","ejs")
app.set("views",__dirname+"/src/views")
app.use(express.static("./public"))
app.use(bodyparser.urlencoded({extended:true}))
const value="sethulakshmi"
const router=require('./src/routes/router')(value)
// routing method
// app.get('/',function(req,res){
//     //  res.send("hlooo...")
//      res.render("index",{data:"New User",nav})

// //  ---  
    
// })
// app.get('/read',function(req,res){
//     // res.send("hlooo...")
//     res.render("viewuser")
    
    
//  })
app.use("/",router)
connectdb()
app.listen(PORT,()=>{
    console.log("server started")
})