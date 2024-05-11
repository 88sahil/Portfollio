const mongoose = require('mongoose')
const projectSchmma = new mongoose.Schema({
    title:{
        type:String,
        required:['true','a project must have title']
    },
    type:String,
    coverPhoto:String,
    coverphotoid:String,
    projectlink:String,
    githublink:String
},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
})

const Project = mongoose.model("portfollio-project",projectSchmma)
module.exports = Project
