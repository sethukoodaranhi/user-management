const mongoose=require('mongoose')
const connectdb=()=>{
    mongoose.connect(process.env.MONGO_URI,()=>{
        console.log("mongodb connected..")
    })
}

module.exports=connectdb