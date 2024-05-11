const AppError = require('./AppError')

const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name:process.env.cloudname,
    api_key:process.env.apikey,
    api_secret:process.env.apisecret
})
const uploader = async(file)=>{
    if(!file){
        return null
    }
    let response=await cloudinary.uploader.upload(file,{resource_type:'auto'})
    return response
}

const deletefile =async(id)=>{
    let response = await cloudinary.uploader.destroy(id)
    return response
}
module.exports ={uploader,deletefile}