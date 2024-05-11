const mongoose = require('mongoose')
const connectdb=()=>{
    mongoose.connect(process.env.dbString).then((con)=>console.log("Db successfully connected")).catch((err)=>{
        console.log(err)
    })
}

module.exports =connectdb