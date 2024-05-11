const GlobalErrorHandle = (err,req,res,next)=>{
    err.statuscode = err.statuscode || 400
    err.status = err.staus || 'fail'
    res.status(err.statuscode).json({
        status:err.status,
        message:err.message,
        stack:err
    })
}
module.exports = GlobalErrorHandle