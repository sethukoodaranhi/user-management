var userdb=require('../model/model')
// function add(req,res){
//     const user=new userdb({
//         uname:req.body.uname,
//         email:req.body.email,
//         gender:req.body.gender,
//         status:req.body.status
//     })
//    user.save(user).then((response)=>{
//       console.log(response) 
//    }).catch((error)=>{
//     console.log(error)
//    })
// }
// exports.create=add
exports.create=(req,res)=>{
    const user=new userdb({
        uname:req.body.uname,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })
   user.save(user).then((response)=>{
      console.log(response) 
      res.redirect('/viewuser')
   }).catch((error)=>{
    console.log(error)
   })
}