const Project = require('../model/project')
const AppError = require("../utils/AppError");
const {  uploader } = require('../utils/upload');
const checkAsync=fn=>{
    return (req,res,next)=>{
        fn(req,res,next).catch(next)
    }
}
module.exports.Authenticate =  (req,res,next)=>{
    if(req.query.password!==process.env.adminpass){
        return next(new AppError("you are not sahil",401))
    }
        res.cookie("auth",process.env.adminString,{
            expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
             sameSite: 'none', // or 'lax' depending on your use case
            secure: true // add this 
        })
        res.status(200).json({
            status:'success',
            granted:true
        })
    
}
module.exports.createProject = checkAsync(async(req,res,next)=>{
        if(req.cookies.auth !== process.env.adminString){
            return next(new AppError('you are not sahil',401))
        }
        const newproject = await Project.create(req.body);
        console.log(newproject)
        if(!newproject) return next(new AppError('fail to create project',500));
        res.status(201).json({
            status:'success'
        })
})
module.exports.AllProjects=checkAsync(async(req,res,next)=>{
    let projects = await Project.find();
    res.status(200).json({
        status:'success',
        results:projects.length,
        projects
    })
})
module.exports.deleteproject = checkAsync(async(req,res,next)=>{
    if(req.cookies.auth !== process.env.adminString){
        return next(new AppError('you are not sahil',401))
    }
    const newproject = await Project.findByIdAndDelete(req.params.id);
    res.status(201).json({
        status:'success'
    })
})
module.exports.uploadphoto=checkAsync(async(req,res,next)=>{
    let file = req.file.path
    if(!file) return next(new AppError("upload kar",400));
    let resp = await uploader(file)
    if(!resp) return next(new AppError('nathi thyo'),500);
    require('fs').unlinkSync(req.file.path)
    res.status(200).json({
        status:'success',
        resp
    })
})