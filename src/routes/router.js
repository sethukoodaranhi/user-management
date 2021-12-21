const express=require('express')
const userdb=require('../model/model')
const controller=require('../controllers/controller')
const route=express.Router()
const nav=[{
    link:"/",
    name:"Home"
},
{
    link:"/viewuser",
    name:"Viewuser"
}
]
function router(val){


route.get('/',function(req,res){
    // res.render("index")
    res.render("index",{data:"New User",nav,val})
})
route.post('/add',controller.create )
route.get('/viewuser',function(req,res){
    userdb.find().then((users)=>{
        res.render("viewuser",{users})
    })
})
route.get('/edituser/:id',function(req,res){
    const id=req.params.id
    userdb.findById(id).then((data)=>{
        res.render("updateuser",{data,nav})
    })

})
route.post('/update/:id',function(req,res){
    const id=req.params.id
    const item={
        uname:req.body.uname,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    }
    userdb.findByIdAndUpdate(id,item).then((response)=>{
        console.log(response)
        res.redirect('/viewuser')
    })
})
route.get('/deleteuser/:id',function(req,res){
    const id=req.params.id
    userdb.findByIdAndDelete(id).then((response)=>{
        console.log(response);
        res.redirect('/viewuser')
    })
})

return route
}

module.exports=router
